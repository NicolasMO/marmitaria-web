const baseUrl = "http://localhost:8080";

export default {

    // Produtos
    produtosEndpoint: `${baseUrl}/produtos`,

    //Ingredientes
    ingredientesEndpoint: `${baseUrl}/ingredientes`,
    ingredientesLimitesEndpoint: `${baseUrl}/ingredientes/limites`,

    // Carrinho
    carrinhoAdicionarItem: `${baseUrl}/carrinho/adicionar`,
}