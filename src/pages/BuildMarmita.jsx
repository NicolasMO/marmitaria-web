import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function BuildMarmita() {
    const location = useLocation();
    const navigate = useNavigate();
    const { tipo } = location.state || {};

    const proteinas = ["Peito de frango assado", "Carne trinchada", "Omelete c/ frango e queijo", "Carne trinchada", "Omelete c/ frango e queijo"];
    const carboidratos = ["Arroz branco", "Baião", "Feijão Carioca", "Macarrão ao alho e óleo", "Arroz integral"];
    const complementos = ["Batata cozida", "Vinagrete", "Repolho refogado", "Batata doce cozida", "Batata cozida", "Batata cozida", "Vinagrete", "Repolho refogado", "Batata doce cozida", "Batata cozida"];

    const handleVoltar = () => {
        navigate('/');
    };

    const handleMontarMarmita = () => {
        console.log("marmita montada");
    };

    return (
        <Container>
            <h1 className="text-center pt-5 mb-4">Monte sua Marmita</h1>
            <Row className="mb-4 px-4">
                <Col md={4}>
                    <h3>PROTEÍNAS - MAX: 1</h3>
                    <div className="p-3 build-marmita-box user-select-none">
                        <Form>
                            {proteinas.map((item, index) => (
                                <Form.Check
                                    type="checkbox"
                                    key={index}
                                    label={item}
                                    id={`proteina-${index}`}
                                    className="mb-2"
                                />
                            ))}
                        </Form>
                    </div>
                    <h3 className="build-marmita-h3">CARBOIDRATOS - MAX: 2</h3>
                    <div className="p-3 build-marmita-box user-select-none">
                    <Form>
                        {carboidratos.map((item, index) => (
                            <Form.Check 
                                type="checkbox"
                                key={index}
                                label={item}
                                id={`carboidrato-${index}`}
                                className="mb-2"
                            />
                        ))}
                    </Form>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>COMPLEMENTOS - MAX: 2</h3>
                    <div className="p-3 build-marmita-box complementos-box user-select-none">
                        <Form>
                            {complementos.map((item, index) => (
                                <Form.Check 
                                    type="checkbox"    
                                    key={index}
                                    label={item}
                                    id={`complemento-${index}`}
                                    className="mb-2"
                                />
                            ))}
                        </Form>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>INGREDIENTES</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Placeholder 1"
                            className="mb-2 img-fluid"
                        />
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Placeholder 2"
                            className="img-fluid"
                        />
                    </div>
                </Col>
            </Row>

            <Row className="pt-4 pb-4 px-4">
                <Col className="d-flex justify-content-between">
                    <Button variant="danger" onClick={handleVoltar}>
                        Voltar
                    </Button>
                    <Button className="btn-success" onClick={handleMontarMarmita}>
                        Montar marmita
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BuildMarmita;