import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useBuildMarmita from "../hooks/useBuildMarmita";


function BuildMarmita() {
    const location = useLocation();
    const { tipoId } = location.state || {};
    

    const { proteinas, carboidratos, complementos, limiteProteinas, limiteCarboidratos, limiteComplementos,
            selectedProteinas, selectedCarboidratos, selectedComplementos, handleSelectIngredientes, 
            handleVoltar, handleMontarMarmita } = useBuildMarmita(tipoId);

    return (
        <Container>
            <h1 className="text-center pt-5 mb-4">Monte sua Marmita</h1>
            <Row className="mb-4 px-4">
                <Col md={4}>
                    <h3>PROTEÍNAS - MAX: {limiteProteinas}</h3>
                    <div className="p-3 build-marmita-box user-select-none">
                        <Form>
                            {proteinas.map(proteina => (
                                <Form.Check 
                                    key={proteina.id}
                                    type="checkbox"    
                                    label={proteina.nome}
                                    id={proteina.id}
                                    checked={selectedProteinas.includes(proteina.id)}
                                    onChange={() => handleSelectIngredientes(proteina.id, proteina.categoria)}
                                    disabled={selectedProteinas.length >= limiteProteinas && !selectedProteinas.includes(proteina.id)}
                                    className="mb-2"
                                />
                            ))}
                        </Form>
                    </div>
                    <h3 className="build-marmita-h3">CARBOIDRATOS - MAX: {limiteCarboidratos}</h3>
                    <div className="p-3 build-marmita-box user-select-none">
                    <Form>
                        {carboidratos.map(carboidrato => (
                            <Form.Check 
                                key={carboidrato.id}
                                type="checkbox"
                                label={carboidrato.nome}
                                id={carboidrato.id}
                                checked={selectedCarboidratos.includes(carboidrato.id)}
                                onChange={() => handleSelectIngredientes(carboidrato.id, carboidrato.categoria)}
                                disabled={selectedCarboidratos.length >= limiteCarboidratos && !selectedCarboidratos.includes(carboidrato.id)}
                                className="mb-2"
                            />
                        ))}
                    </Form>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>COMPLEMENTOS - MAX: {limiteComplementos}</h3>
                    <div className="p-3 build-marmita-box complementos-box user-select-none">
                        <Form>
                            {complementos.map(complemento => (
                                <Form.Check 
                                    key={complemento.id}
                                    type="checkbox"
                                    label={complemento.nome}
                                    id={complemento.id}
                                    checked={selectedComplementos.includes(complemento.id)}
                                    onChange={() => handleSelectIngredientes(complemento.id, complemento.categoria)}
                                    disabled={selectedComplementos.length >= limiteComplementos && !selectedComplementos.includes(complemento.id)}
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