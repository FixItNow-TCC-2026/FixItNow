function BarraNav() {
  
 return (
    <nav className="bg-gray-800 p-4 w-full ">
      <div className="container mx-auto flex items-center justify-between ">
        <img src="src/imagens/LogoSemNome.png" alt="Logo" className="max-h-20 max-w-60 hidden md:flex " />       
        <h1 className="text-white font-bold text-xl">FIX IT <div className="text-green-500 mr-10">NOW</div></h1>

        <div className="border border-green-500 py-4">
          <a  href="#inicio"  className="text-gray-300 hover:text-white transition transform scale-100 duration-300 px-3 py-2 rounded-md text-sm font-medium btn-hover">Início</a>

          <a href="#" className="text-gray-300 hover:text-white transition transform scale-100 duration-300 px-3 py-2 rounded-md text-sm     font-medium btn-hover">Sobre</a>

          <a href="#contato"  className="text-gray-300 hover:text-white transition transform scale-100 duration-300 px-3 py-2 rounded-md text-sm font-medium btn-hover">Contato</a>
          <a href="#" className="text-gray-300 hover:text-white transition transform scale-100 duration-300 px-3 py-2 rounded-md text-sm font-medium btn-hover">Como funciona</a>

          <a href="#" className="text-gray-300 hover:text-white transition transform scale-100 duration-300 px-3 py-2 rounded-md text-sm font-medium btn-hover">Serviços</a>
          
        </div>
        <div className="flex items-center">
             <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4" href="#">Cadastrar</button>
            <button className="border border-green-500 hover:bg-green-700 hover:text-white transition transform scale-100 text-white font-bold py-2 px-4 rounded ml-4"  href="#">Entrar</button>
        </div>
      </div>
    </nav>

 )
}
export default BarraNav;