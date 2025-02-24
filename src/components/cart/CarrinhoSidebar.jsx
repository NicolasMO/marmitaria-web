import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useCarrinho from "../../hooks/useCarrinho";

function CarrinhoSidebar() {
    const [show, setShow] = useState(false);
    const toggleCarrinho = () => setShow(!show);
    const { carrinho, valorTotal, abrirCarrinho, removerProduto, limparCarrinho } = useCarrinho();
    const { isAuthenticated } = useAuth();
   
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
        {/* Botão de exibição da sidebar */}
         
            <Button 
                className="cart-view-button"
                variant="danger"
                onClick={toggleCarrinho}
                style={{
                    position: "fixed",
                    fontSize: "18px",
                    bottom: "20px",
                    right: show ? "calc(20% + 15px)" : "20px",
                    transition: "right 0.3s ease-in-out",
                    zIndex: 1050,
                }}
            >
                {show ? "Fechar Carrinho" : "Abrir Carrinho"}
            </Button>
            
        {/* Corpo do carrinho */}
            <Offcanvas className="cart-sidebar" show={show} onShow={abrirCarrinho} onHide={toggleCarrinho} placement="end"
                style={{ width: "20%" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Seu Carrinho</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="cart-body">
                    {carrinho.length === 0 ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        <>
                            {carrinho.map((item) => (
                                <div className="cart-itens" key={item.id} style={{marginBottom: "10px"}}>
                                    <div>
                                        <strong>{item.produto.nome}</strong>
                                        <p>
                                            Qtd. {item.quantidade} - R$ {item.precoTotal.toFixed(2)}
                                        </p>
                                    </div>
                                    <i className="bi bi-trash"
                                        onClick={() => removerProduto(item.id)}
                                        style={{ fontSize: "20px", color: "red", cursor: "pointer", marginRight: "10px", }}
                                        title="Remover" />
                                </div>
                            ))}

                            <div className="cart-sidebar-options">
                                <h5 className="cart-total-price">Valor total: R$ {valorTotal.toFixed(2)}</h5>
                                <Button variant="success" className="cart-sidebar-btn mt-2">
                                    Finalizar Pedido
                                </Button>
                                <Button variant="warning" className="cart-sidebar-btn mt-2 mb-1" onClick={limparCarrinho}>
                                    Limpar Carrinho
                                </Button>
                            </div>
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CarrinhoSidebar;