import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../services/apiService";

export default function useAuth() {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token") || null);

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
            
            toast.success("Usuário logado com sucesso.")
        } catch (error) {
            if (error) {
                const errorMessage = error.response?.data?.message || "Ocorreu um erro.";
                console.log(errorMessage)
                console.log(error)
                toast.error("Usuário ou senha inválidos.")
            } else {
                toast.error("Ocorreu um erro.")
            }
        }
    };
    
    const logout = () => {
        localStorage.clear();
        setToken(null);
        navigate("/");
        window.location.reload();
    };

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);
    
    return { login, isAuthenticated: !!token, logout, token }
}