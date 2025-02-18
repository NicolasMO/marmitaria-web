import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

function Header() {
    const { login, logout, isAuthenticated, token } = useAuth();

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(email, senha);
          setEmail("");
          setSenha("");
        } catch (error) {
          console.error("Erro no login:", error);
        }
      };

    return (
        <Navbar className="header-navbar" expand="lg">
            <div className="logo-container">
                <Navbar.Brand href="/">
                    <img src={"/assets/logoMarmitaria.png"} alt="Logo da Marmitaria" className="logo"/>
                </Navbar.Brand>
                <Nav className="profile-nav">
                    {isAuthenticated ? (
                        <>
                            <span className="text-white">Bem-vindo, {localStorage.getItem("usuarioNome")}</span>
                            <Nav.Link href="/perfil">Meu Perfil</Nav.Link>
                            <Button variant="danger" onClick={logout}>Sair</Button>
                        </>
                    ) : (
                        <>
                            <Form onSubmit={handleLoginSubmit}>
                                <FormControl
                                    type="email"
                                    placeholder="Email"
                                    className="me-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormControl
                                    type="password"
                                    placeholder="Senha"
                                    className="me-2"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <Button variant="primary" type="submit">Entrar</Button>
                            </Form>
                        </>
                    )}
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;