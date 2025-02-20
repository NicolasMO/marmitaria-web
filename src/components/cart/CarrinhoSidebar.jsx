import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useCarrinho from "../../hooks/useCarrinho";

function CarrinhoSidebar() {
    const [show, setShow] = useState(false);
    const toggleCarrinho = () => setShow(!show);
    const { carrinho, abrirCarrinho, limparCarrinho } = useCarrinho();
    const { isAuthenticated } = useAuth();
   
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
        {/* Botão de exibição da sidebar */}
         
            <Button 
                className="cart-view-button"
                variant="primary"
                onClick={toggleCarrinho}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: show ? "calc(20% + 20px)" : "20px",
                    transition: "right 0.3s ease-in-out",
                    zIndex: 1050,
                }}
            >
                {show ? "Fechar Carrinho" : "Abrir Carrinho"}
            </Button>
            
        {/* Corpo do carrinho */}
            <Offcanvas show={show} onShow={abrirCarrinho} onHide={toggleCarrinho} placement="end"
                style={{
                    width: "20%"
                }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Seu Carrinho</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    {carrinho.length === 0 ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        <>
                            {carrinho.map((item) => (
                                <div key={item.id} style={{marginBottom: "10px"}}>
                                    <strong>{item.produto.nome}</strong>
                                    <p>
                                        Qtd. {item.quantidade} - R& {item.preco.toFixed(2)}
                                    </p>
                                </div>
                            ))}

                            <div className="cart-div-options">
                                <h5>Total: R& 10,00</h5>
                                <Button variant="success" className="mt-2">
                                    Finalizar Pedido
                                </Button>
                                <Button variant="warning" onClick={limparCarrinho} className="mt-2">
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