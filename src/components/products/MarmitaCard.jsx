import React from "react";
import { Card, Button } from "react-bootstrap";

function MarmitaCard({ marmita }) {
    return (
        <Card>
            <Card.Img variant="top" src={marmita.imagem} />
            <Card.Body>
                <Card.Title>{marmita.nome} - R$ {marmita.preco}</Card.Title>
                <Card.Text>{marmita.descricao}</Card.Text>
                <Button variant="primary">Escolher</Button>
            </Card.Body>
        </Card>
    );
}

export default MarmitaCard;