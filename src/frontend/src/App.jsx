import BarraNav from "./Components/BarraNav";
import ConteudoMain from "./Components/ConteudoMain";
import Rodape from "./Components/Rodape";
import Cadastro from "./Components/Cadastro";
import SelectUser from "./Components/SelectUser"; 
import Config from "./Components/Config";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <BarraNav />
      </header>

      <main id="inicio" className="flex-grow">
        <ConteudoMain />
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 px-4 mt-auto border-t border-gray-700">
        <Rodape />
      </footer>
        
        <Cadastro/>
        <SelectUser/>
        <Config/>
    </div>
  );
}

export default App;