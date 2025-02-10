import React from "react";
import MarmitaCard from "../components/products/MarmitaCard";
import BebidaCard from "../components/products/BebidaCard";
import { Container, Row, Col } from "react-bootstrap"
import useProdutos from "../hooks/useProdutos"
import "../styles/home.css"

function Home() {
    
    const { marmitas, bebidas } = useProdutos();

    return (
        <main>
            <Container className="home-container">
                <section>
                    <h2 class="text-center pt-5">Escolha sua marmita</h2>
                    <div className="home-cards">
                        <Row className="marmita-row d-flex justify-content-center">
                            {marmitas.map(marmita => (
                                <Col key={marmita.id} md={6} lg={4} className="d-flex justify-content-center" style={{ marginRight: "20px", marginLeft: "20px" }}>
                                    <MarmitaCard marmita={marmita}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </Container>

            <Container className="home-container home-container-bebidas">
                <section>
                    <h2 class="text-center pt-5">Escolha sua bebida</h2>
                    <div className="home-cards home-cards-bebida">
                        <Row className="bebida-row d-flex justify-content-center">
                            {bebidas.map(bebida => (
                                <Col key={bebida.id} md={6} lg={4} className="d-flex justify-content-center mb-4" style={{ marginRight: "-20px", marginLeft: "-20px" }}>
                                    <BebidaCard bebida={bebida}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default Home;