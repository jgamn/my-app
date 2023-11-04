function Form(){
    function cadastrarUsuario(e){
        e.preventdefault()
        console.log('Cadastrado!')
    }
    return( 
        <div>
            <h1>Meu cadastro.</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="texto" placeholder="digite o seu nome"/>
                </div>
                <div>
                <input type="Submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form