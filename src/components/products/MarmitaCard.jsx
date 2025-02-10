import React from "react";
import { Card, Button } from "react-bootstrap";

function MarmitaCard({ marmita }) {
    const descricao =
        marmita.tipo === "MARMITA_PEQUENA"
            ? (
                <>
                    <p>Marmita pequena, servida numa hamburgueira.</p>
                    <p>Escolha 1 proteína, 2 carboidratos e 2 acompanhantes.</p>
                    <p>Serve 1 pessoa.</p>
                </>
            )
            : marmita.tipo === "MARMITA_GRANDE" && (
                <>
                    <p>Marmita grande, pote de 1100ML.</p>
                    <p>Escolha 2 proteínas, 3 carboidratos e 4 acompanhantes.</p>
                    <p>Serve 1-2 pessoas.</p>
                </>
            );

    return (
        <Card className="card-marmita">
            <Card.Img variant="top" src={`assets/${marmita.imagem}`} />
            <Card.Body>
                <Card.Title>{marmita.nome} - R$ {marmita.preco.toFixed(2)}</Card.Title>
                <Card.Text>{descricao}</Card.Text>
                <Button variant="success">Montar</Button>
            </Card.Body>
        </Card>
    );
}

export default MarmitaCard;

