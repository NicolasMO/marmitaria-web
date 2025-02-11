import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import BuildMarmita from "./pages/BuildMarmita";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


function Layout() {
  const location = useLocation();
  
  return (
    <>
    {location.pathname !== "/cadastro" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marmita" element={<BuildMarmita />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
