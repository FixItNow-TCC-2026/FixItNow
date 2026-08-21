function SelectUser() {
 return (
    <div className="w-200 h-150 bg-white border border-gray-300 rounded-lg shadow-md p-6 m-4 flex flex-col items-center justify-center">
        <img src="src/imagens/logo.png" alt="Logo" />


        <form action="">
          <nav>
            <label htmlFor="user" className="text-2xl font-bold">Selecione o tipo de usuário:</label>
            <br />

            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  m-10 w-50 h-10"> 
              <a href="#">Admnistrador</a>
            </button> 
            <br />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-10 w-50 h-10"> 
              <a href="#">Usuário</a>
            </button> 
            <br />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  m-10 w-50 h-10"> 
              <a href="#">Empresa</a>
            </button> 
            <br />
          
          </nav>
        </form>


    </div>

   

    
  )

} export default SelectUser