import { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { CarrinhoContext } from "../../hooks/useCarrinho";

function CarrinhoItem({ carrinho, item, removerProduto, }) {
    const [quantidade, setQuantidade] = useState(item.quantidade);
    const { atualizarQuantidadeProduto } = useContext(CarrinhoContext);
    let enterPressed = false;

    const handleQuantidadeChange = (e) => {
        const value = e.target.value;

        if (value === "" || parseInt(value, 10) < 1) {
            return;
        }

        setQuantidade(value);
    };

    const handleQuantidadeUpdate = () => {
        if (!enterPressed && quantidade !== item.quantidade) {
            atualizarQuantidadeProduto(item.produto.id, quantidade);
        }
        enterPressed = false;
    };
    
    const handleKeyDownEnter = (e) => {
        if (e.key === "Enter") {
            enterPressed = true;
            atualizarQuantidadeProduto(item.produto.id, quantidade);
            e.target.blur();
        }
    };

    return (
        <div className="cart-itens" key={item.id} style={{ marginBottom: "10px" }}>
            <div>
                <strong>{item.produto.nome}</strong>
                <p>
                    Qtd. {item.quantidade} - R$ {item.precoTotal.toFixed(2)}
                </p>
            </div>

             <div className="d-flex align-items-center">
                {!item.produto.nome.toLowerCase().includes("marmita") && (
                    <Form.Control
                        className="cart-item-input"
                        type="number"
                        min="1"
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                        onKeyDown={handleKeyDownEnter} 
                        onBlur={handleQuantidadeUpdate}
                    />
                )}

                <i className="bi bi-trash"
                    onClick={() => removerProduto(item.id)}
                    style={{ fontSize: "20px", color: "red", cursor: "pointer", marginRight: "10px", }}
                    title="Remover" />
            </div>
        </div>
    )
}

export default CarrinhoItem;