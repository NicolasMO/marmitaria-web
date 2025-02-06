function Register() {
    return (
        <div className="register-page">
            <h1>Cadastro</h1>
            <form>
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome" />

                <label>Email:</label>
                <input type="email" placeholder="Digite seu email" />

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Register;