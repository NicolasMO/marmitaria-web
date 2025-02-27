import { toast } from "react-toastify";
import React, { createContext, useContext, useState } from "react";
import apiService from "../services/apiService";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] =  useState([]);
    const [valorTotal, setValorTotal] = useState(0);

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

    const atualizarQuantidadeProduto = (produtoId, novaQuantidade) => {
        const usuarioId = localStorage.getItem("usuarioId");
        const produtoDTO = {
            usuarioId: usuarioId,
            produtoId: produtoId,
            quantidade: novaQuantidade
        };
        apiService.carrinhoAdicionarItem(produtoDTO)
        .then(response => {
            toast.success("Quantidade alterada.");
            setCarrinho(prevCarrinho => {
                const novoCarrinho = prevCarrinho.map(item => {
                    if (item.produto.id === produtoId) {
                        const novoPrecoTotal = item.produto.preco * novaQuantidade;
                        return {
                            ...item,
                            quantidade: novaQuantidade,
                            precoTotal: novoPrecoTotal
                        };
                    }
                    return item;
                })

                const novoValorTotal = novoCarrinho.reduce((acc, item) => acc + item.precoTotal, 0);
                setValorTotal(novoValorTotal);
                return novoCarrinho;
            })
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

    return ( <CarrinhoContext.Provider value ={{ 
            carrinho, valorTotal, abrirCarrinho, limparCarrinho,
            adicionarProduto, removerProduto, atualizarQuantidadeProduto 
            }}>
            {children}
        </CarrinhoContext.Provider>)
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}