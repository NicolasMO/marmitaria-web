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
    carrinhoListarItens: `${baseUrl}/carrinho`,
    carrinhoAdicionarItem: `${baseUrl}/carrinho/adicionar`,
}