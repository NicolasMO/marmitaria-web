import { useState, useEffect } from "react";
import apiService from "../services/apiService";

const useProdutos = () => {
    const [marmitas, setMarmitas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {
        apiService.produtosListar()
            .then(response => {
                const marmitasData = response.data.filter(produto => produto.tipo === "MARMITA_PEQUENA" || produto.tipo === "MARMITA_GRANDE");
                const bebidasData = response.data.filter(produto => produto.tipo === "BEBIDA");

                setMarmitas(marmitasData);
                setBebidas(bebidasData);
            })
            .catch(error => {
                console.log('Erro ao buscar produtos.')
            });
    }, []);

    return { marmitas, bebidas };
}

export default useProdutos;