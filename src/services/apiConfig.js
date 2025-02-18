const baseUrl = "http://localhost:8080";

export default {

    // Autenticação
    authEndpoint: `${baseUrl}/auth/login`,

    // Produtos
    produtosEndpoint: `${baseUrl}/produtos`,

    //Ingredientes
    ingredientesEndpoint: `${baseUrl}/ingredientes`,
    ingredientesLimitesEndpoint: `${baseUrl}/ingredientes/limites`,

    // Carrinho
    carrinhoAdicionarItem: `${baseUrl}/carrinho/adicionar`,
}