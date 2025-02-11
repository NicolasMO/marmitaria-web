import axios from "axios";
import apiConfig from "./apiConfig";

class ApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseUrl: apiConfig.baseUrl
        });

        // Intercepta requisições para adicionar token de autenticação
        this.axiosInstance.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );
        
        // Intercepta respostas para tratamento de erros
        this.axiosInstance.interceptors.request.use(
            response => response,
            error => {
                if (error.response && error.response.status === 401) {
                    console.log('Token expirado ou usuário não autorizado.')
                }
                return Promise.reject(error);
            }
        );
    };

    produtosListar() {
        return this.axiosInstance.get(apiConfig.produtosEndpoint);
    };

    ingredientesListar() {
        return this.axiosInstance.get(apiConfig.ingredientesEndpoint);
    };

    ingredientesListarLimites(produtoId) {
        return this.axiosInstance.get(`${apiConfig.ingredientesLimitesEndpoint}/${produtoId}`);
    };

    carrinhoAdicionarItem(data) {
        return this.axiosInstance.post(`${apiConfig.carrinhoAdicionarItem}`, data)
    }
}

export default new ApiService();