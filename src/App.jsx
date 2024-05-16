import { useState } from "react";

function App() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div className="App">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItens">
            <li>Gerador CPF</li>
            <li>Gerador CEP</li>
            <li>Localizador CEP</li>
            <li>Gerador Persona</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
