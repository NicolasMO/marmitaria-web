import React from "react";
import { Card, Button } from "react-bootstrap";
import useCarrinho from "../../hooks/useCarrinho";

function BebidaCard({ bebida }) {
    const { adicionarProduto } = useCarrinho();
    
    return (
        <Card className="card-bebida">
            <Card.Img variant="top" src={`assets/${bebida.imagem}`} />
            <Card.Body>
                <Card.Title>{bebida.nome} - R$ {bebida.preco.toFixed(2)}</Card.Title>
                <Button variant="success" onClick={() => {adicionarProduto(bebida.id)}}>Adicionar</Button>
            </Card.Body>
        </Card>
    );
}

export default BebidaCard;