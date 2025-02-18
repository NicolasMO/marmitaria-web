import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../services/apiService";

export default function useAuth() {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const login = async (email, senha) => {
        try {
            const loginRequest = { email: email, senha: senha };
            const response = await apiService.authLogin(loginRequest);
            const data = response.data;
            setToken(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("usuarioNome", data.usuarioNome);
            localStorage.setItem("usuarioCarrinho", data.carrinhoId);
            localStorage.setItem("usuarioId", data.usuarioId);
        } catch (error) {
            console.log("Erro no login: ", error)
        }
    };

    const logout = () => {
        localStorage.clear();
        setToken(null);
        navigate("/");
      };

    return { login, isAuthenticated: !!token, logout }
}