import { useState } from "react";

function Offcanvas(p) {
  const [aberto, setAberto] = useState(true);

  function fecharOffcanvas() {
    setAberto(false);
  }

  if (!aberto) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-80 bg-white shadow-xl"
      id="offcanvas"
      tabIndex="-1"
      aria-labelledby="offcanvasLabel"
    >
      <div className="flex items-center justify-between border-b p-4">

        <h5
          className="text-xl font-semibold"
          id={p.id}
        >
          {p.titulo}
        </h5>

        <button
          type="button"
          aria-label="Close"
          onClick={fecharOffcanvas}
          className="text-2xl font-bold text-gray-500 hover:text-black"
        >
          X
        </button>

      </div>

      <div className="p-4">
        <p>{p.conteudo}</p>
      </div>
    </div>
  );
}

export default Offcanvas;