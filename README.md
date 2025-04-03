Marmitaria Web Front-end (Em desenvolvimento)

Este repositório contém o front-end da aplicação da Marmitaria, desenvolvido com **React e React Bootstrap**. Ele consome a API do [back-end](https://github.com/NicolasMO/marmitaria-api) para permitir a montagem e o pedido de marmitas personalizadas.

## 🚀 Tecnologias Utilizadas

- React  
- React Bootstrap  
- Axios  
- Context API  
- LocalStorage para autenticação  

---

## 📷 Capturas de Tela  

### 🏠 Tela Principal  
![Tela Principal](https://media.licdn.com/dms/image/v2/D4D22AQEb5vzuhtyg4A/feedshare-shrink_2048_1536/B4DZWKK.lLHYA8-/0/1741779889498?e=1746662400&v=beta&t=YiMELQ6A_9UdzVZX5PxXneOTviDDSSYVzSWXgsgDkwI)

### 🍛 Tela de Montagem da Marmita  
![Tela de Montagem](https://media.licdn.com/dms/image/v2/D4D22AQGGaKaXOcfVdg/feedshare-shrink_2048_1536/B4DZWKK.k.GkAo-/0/1741779889226?e=1746662400&v=beta&t=f-S958hffG-RZ_jtbqFWDmKJVEsWmmxzMvpW2FTMl6E)

### 🛍️ Tela de Produtos  
![Tela de Produtos](https://media.licdn.com/dms/image/v2/D4D22AQEbxCzar6tyRw/feedshare-shrink_2048_1536/B4DZWKK.lFG4Ao-/0/1741779889477?e=1746662400&v=beta&t=iKUBoxUJTg_kZzLOdN9X81xPN4UhMIqjrbUuMmotitk)

### 🛒 Sidebar do Carrinho  
![Tela do Carrinho](https://media.licdn.com/dms/image/v2/D4D22AQGZBPHqErpdCA/feedshare-shrink_2048_1536/B4DZWKK.lQG8Ao-/0/1741779889244?e=1746662400&v=beta&t=rdvVsaZQHL-S3wCoeXNSHeIgXQraLIw5XwgQuLK0qUM)

### 👤 Telas em Desenvolvimento (Figma)  
[Link do Figma](https://www.figma.com/design/bcsYMNC6uTjpgJGxYtKZsd/Marmitaria?node-id=33-254&t=UKALUw66OA7rEM02-0)

---

## 📌 Funcionalidades Implementadas  

### ✅ Página de Montagem da Marmita  
- Chamadas assíncronas via **Axios** para recuperar ingredientes e limites.  
- Validação das seleções conforme restrições.  
- Inserção da marmita no carrinho.  

### ✅ Formulário de Login  
- Armazenamento de token e informações no **localStorage**.  
- Ajustes no **CORS** para requisições no front-end.  
- Melhorias visuais na página inicial.  

### ✅ Carrinho de Compras  
- Sidebar com itens adicionados.  
- Exclusão individual de itens.  
- Seleção de quantidades.  
- Limpeza total do carrinho.  
- Reformulação do layout.  

---

## 📦 Instalação e Execução  

1️⃣ Clone este repositório:  

```bash
git clone https://github.com/NicolasMO/marmitaria-web.git
