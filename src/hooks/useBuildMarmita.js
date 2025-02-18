import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../services/apiService";

const useBuildMarmita = (tipoId) => {
    const navigate = useNavigate();

    // Estado para armazenar os ingredientes disponíveis
    const [proteinas, setProteinas] = useState([]);
    const [carboidratos, setCarboidratos] = useState([]);
    const [complementos, setComplementos] = useState([]);

    // Estado para armazenar os ingredientes selecionados
    const [selectedProteinas, setSelectedProteinas] = useState([]);
    const [selectedCarboidratos, setSelectedCarboidratos] = useState([]);
    const [selectedComplementos, setSelectedComplementos] = useState([]);

    // Estado para armazenar os limites de ingredientes
    const [limiteProteinas, setLimiteProteinas] = useState(0);
    const [limiteCarboidratos, setLimiteCarboidratos] = useState(0);
    const [limiteComplementos, setLimiteComplementos] = useState(0);

    // Busca os limites de cada ingrediente
    useEffect(() => {
        if (!tipoId) return;

        apiService.ingredientesListarLimites(tipoId)
            .then(response => {
                setLimiteProteinas(response.data.maxProteinas)
                setLimiteCarboidratos(response.data.maxCarboidratos)
                setLimiteComplementos(response.data.maxComplementos)
            })
            .catch(error => {
                console.log('Erro ao buscar limites de ingredientes.')
            })
    }, [tipoId]);

    // Busca os ingredientes disponíveis
    useEffect(() => {
        apiService.ingredientesListar()
            .then(response => {
                const proteinasData = response.data.filter(produto => produto.categoria === "PROTEINA");
                const carboidratosData = response.data.filter(produto => produto.categoria === "CARBOIDRATO");
                const complementosData = response.data.filter(produto => produto.categoria === "COMPLEMENTO");
                setProteinas(proteinasData);
                setCarboidratos(carboidratosData);
                setComplementos(complementosData);
            })
            .catch(error => {
                console.log('Erro ao buscar ingredientes.')
            });
    }, []);

    // Função responsável por verificar e bloquear os checkboxes caso atinja o limite
    const handleSelectIngredientes = (id, categoria) => {
        if (categoria === "PROTEINA") {
            if (selectedProteinas.includes(id)) {
                setSelectedProteinas(selectedProteinas.filter(item => item !== id));
            } else if (selectedProteinas.length < limiteProteinas) {
                setSelectedProteinas([...selectedProteinas, id]);
            }
        } else if (categoria === "CARBOIDRATO") {
            if (selectedCarboidratos.includes(id)) {
                setSelectedCarboidratos(selectedCarboidratos.filter(item => item !== id));
            } else if (selectedCarboidratos.length < limiteCarboidratos) {
                setSelectedCarboidratos([...selectedCarboidratos, id]);
            }
        } else if (categoria === "COMPLEMENTO") {
            if (selectedComplementos.includes(id)) {
                setSelectedComplementos(selectedComplementos.filter(item => item !== id));
            } else if (selectedComplementos.length < limiteComplementos) {
                setSelectedComplementos([...selectedComplementos, id]);
            }
        }
    };
    
    // Função responsável por montar a marmita e adicionar no carrinho
    const handleVoltar = () => {
        navigate('/');
    };

    const handleMontarMarmita = () => {
        const marmitaDTO = {
            usuarioId: 2,
            produtoId: tipoId,
            quantidade: 1,
            marmitaDTO: {
                ingredientesId: [...selectedProteinas, ...selectedCarboidratos, ...selectedComplementos]
            }
        }

        apiService.carrinhoAdicionarItem(marmitaDTO)
            .then(response => {
                toast.success("Item adicionado ao carrinho.")
                handleVoltar()
            })
            .catch(error => {
                if (error.response.data) {
                    toast.error(error.response.data.message)
                } else {
                    toast.error("Ocorreu um erro.")
                }
            })
    };

    return { proteinas, carboidratos, complementos, limiteProteinas, limiteCarboidratos, limiteComplementos, selectedProteinas, selectedCarboidratos, selectedComplementos, 
             handleVoltar, handleSelectIngredientes, handleMontarMarmita };
}

export default useBuildMarmita;