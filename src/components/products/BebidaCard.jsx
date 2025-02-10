import React from "react";
import { Card, Button } from "react-bootstrap";

function BebidaCard({ bebida }) {
    return (
        <Card className="card-bebida">
            <Card.Img variant="top" src={`assets/${bebida.imagem}`} />
            <Card.Body>
                <Card.Title>{bebida.nome} - R$ {bebida.preco.toFixed(2)}</Card.Title>
                <Button variant="success">Adicionar</Button>
            </Card.Body>
        </Card>
    );
}

export default BebidaCard;