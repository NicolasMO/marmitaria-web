import { toast } from "react-toastify";
import { useState } from "react";
import apiService from "../services/apiService";

const useCarrinho = () => {
    const [carrinho, setCarrinho] =  useState([]);

    //Busca o carrinho do usuário logado
    const abrirCarrinho = () => {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId != null) {
            apiService.carrinhoListarItens(usuarioId)
                .then(response => {
                    const marmitas = response.data.filter(item => item.produto.nome.toLowerCase().includes("marmita"));
                    const outros = response.data.filter(item => !item.produto.nome.toLowerCase().includes("marmita"));

                    setCarrinho([...marmitas, ...outros]);
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

    return { carrinho, abrirCarrinho, limparCarrinho, adicionarProduto,  }
}

export default useCarrinho;