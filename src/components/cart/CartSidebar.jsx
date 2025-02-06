    import { useState } from "react";

    function CartSidebar({ isOpen, toggleCart }) {
        if (!isOpen) return null;

        return (
            <aside className="cart-sidebar">
                <button onClick={toggleCart}>Fechar</button>
                <h2>Seu Carrinho</h2>
                <ul>
                    <li>Produto 1 - R$ 20,00</li>
                    <li>Produto 2 - R$ 10,00</li>
                </ul>
                <button>Finalizar Compra</button>
            </aside>
        );
    }

    export default CartSidebar;