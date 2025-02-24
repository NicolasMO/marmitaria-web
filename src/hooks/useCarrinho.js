import { toast } from "react-toastify";
import { useState } from "react";
import apiService from "../services/apiService";

const useCarrinho = () => {
    const [carrinho, setCarrinho] =  useState([]);
    const [valorTotal, setValorTotal] = useState();

    //Busca o carrinho do usuário logado
    const abrirCarrinho = () => {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId != null) {
            apiService.carrinhoListarItens(usuarioId)
                .then(response => {
                    const marmitas = response.data.itens.filter(item => item.produto.nome.toLowerCase().includes("marmita"));
                    const outros = response.data.itens.filter(item => !item.produto.nome.toLowerCase().includes("marmita"));

                    setCarrinho([...marmitas, ...outros]);
                    setValorTotal(response.data.valorTotal);
                })
                .catch(error => {
                    console.log(error)
                });
        };
    };

    const adicionarProduto = (produtoId) => {
        const usuarioId = localStorage.getItem("usuarioId");
        const produtoDTO = {
            usuarioId: usuarioId,
            produtoId: produtoId,
            quantidade: 1
        };

        apiService.carrinhoAdicionarItem(produtoDTO)
            .then(response => {
                toast.success(response.data);
            })
            .catch(error => {
                if (error.response.data) {
                    toast.error(error.response.data);
                } else {
                    toast.error("Ocorreu um erro.");
                }
            });
    };

    const removerProduto = (produtoId) => {
        const carrinhoId = localStorage.getItem("usuarioCarrinho");
        apiService.carrinhoRemoverItem(carrinhoId, produtoId)
        .then(response => {
            toast.success(response.data);
            setCarrinho(prevCarrinho => {
                const itemRemovido = carrinho.find(item => item.id === produtoId);
                if (itemRemovido) {
                    setValorTotal(prevValor => valorTotal - itemRemovido.precoTotal);
                }
                return prevCarrinho.filter(item => item.id !== produtoId);
                  });
            })
            .catch(error => {
                if (error.response.data) {
                    toast.error(error.response.data);
                } else {
                    toast.error("Ocorreu um erro.");
                }
            });
    }

    const limparCarrinho = () => {
        const carrinhoId = localStorage.getItem("usuarioCarrinho");
        if (carrinhoId != null) {
            apiService.carrinhoLimparCarrinho(carrinhoId)
                .then(response => {
                    setCarrinho([]);
                    toast.warning("Carrinho limpo.")
                })
                .catch(error => {
                    if (error.response.data) {
                        toast.error(error.response.data);
                    } else {
                        toast.error("Ocorreu um erro.");
                    } 
                });
        };
    };

    return { carrinho, valorTotal, abrirCarrinho, limparCarrinho, adicionarProduto, removerProduto }
}

export default useCarrinho;