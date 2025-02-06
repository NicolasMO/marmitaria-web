import React from "react";
import { Card, Button } from "react-bootstrap";

function BebidaCard({ bebida }) {
    return (
        <Card>
            <Card.Img variant="top" src={bebida.imagem} />
            <Card.Body>
                <Card.Title>{bebida.nome} - R$ {bebida.preco}</Card.Title>
                <Button variant="primary">Adicionar</Button>
            </Card.Body>
        </Card>
    );
}

export default BebidaCard;