function cadastro() {
  return (

    <div className="w-200 h-150 bg-white border border-gray-300 rounded-lg shadow-md p-6 m-4 flex flex-col items-center justify-center">

    <img src="src/imagens/logo.png" alt="Logo" />
    <h1 className="text-2xl font-bold">Cadastro de Usuário</h1>

      <div className=" p-15 ">
  
        <form >

          <label htmlFor="nome" className="text-lg">Nome:</label>
          <br />
          <input 
            type="text" 
            id="nome" 
            name="nome"
            placeholder="Coloque seu nome aqui" 
            alt="Digite seu nome"
            required 
            className="border border-gray-400 rounded px-2 py-1 text-lg"
          />

        
          <br />
          <br />

          <label htmlFor="email" className="text-lg">Email:</label>
           <br />
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Coloque seu email aqui" 
            alt="Digite seu email"
            required 
            className="border border-gray-400 rounded px-2 py-1 text-lg"
          />
          <br />
          <br />

          <label htmlFor="password" className="text-lg">Senha:</label>
           <br />
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Coloque sua senha aqui" 
            alt="Digite sua senha"
            required 
            className="border border-gray-400 rounded px-2 py-1 text-lg"
          />
          
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto mt-4 text-lg">
            Cadastrar
          </button>

        </form>
       
      </div>
    </div>
  );
}

export default cadastro;