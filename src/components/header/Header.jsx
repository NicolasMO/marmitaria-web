import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";

function Header() {
    return (
        <Navbar className="header-navbar" expand="lg">
            <div className="logo-container">
                <Navbar.Brand href="/">
                    <img src={"/assets/logoMarmitaria.png"} alt="Logo da Marmitaria" className="logo"/>
                </Navbar.Brand>
                <Nav className="profile-nav">
                    <Nav.Link href="/perfil">Meu Perfil</Nav.Link>
                    <Button variant="danger">Sair</Button>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;