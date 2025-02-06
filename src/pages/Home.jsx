import React, { useState, useEffect } from "react";
import MarmitaCard from "../components/products/MarmitaCard";
import BebidaCard from "../components/products/BebidaCard";
import { Container, Row, Col } from "react-bootstrap"
import "../styles/home.css"

function Home() {
    const [marmitas, setMarmitas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    // Função para buscar produtos da API
    useEffect(() => {
        // Simulação de fetch na API (substitua pelo seu código real de fetch)
        setMarmitas([
            { id: 1, nome: 'Marmita Pequena', preco: 15, descricao: 'Escolha 1 proteína e 2 carboidratos', imagem: 'marmita1.jpg' },
            { id: 2, nome: 'Marmita Grande', preco: 25, descricao: 'Escolha 2 proteínas e 3 carboidratos', imagem: 'marmita2.jpg' }
        ]);
        setBebidas([
            { id: 1, nome: 'Refrigerante', preco: 5, imagem: 'refri1.jpg' },
            { id: 2, nome: 'Água', preco: 2, imagem: 'agua1.jpg' },
            { id: 3, nome: 'Suco de Laranja', preco: 6, imagem: 'suco1.jpg' },
            { id: 4, nome: 'Suco de Uva', preco: 6, imagem: 'suco2.jpg' },
            { id: 5, nome: 'Cerveja', preco: 8, imagem: 'cerveja1.jpg' }
        ]);
    }, []);

    return (
        <main>
            <Container className="home-container">
                <section>
                    <h2>Escolha sua marmita</h2>
                    <div className="home-cards">
                        <Row className="marmita-row">
                            {marmitas.map(marmita => (
                                <Col key={marmita.id} md={6} lg={4}>
                                    <MarmitaCard marmita={marmita}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </Container>

            <Container className="home-container home-container-bebidas">
                <section>
                    <h2>Escolha sua bebida</h2>
                    <div className="home-cards home-cards-bebida">
                        <Row className="bebida-row">
                            {bebidas.map(bebida => (
                                <Col key={bebida.id} md={6} lg={4}>
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