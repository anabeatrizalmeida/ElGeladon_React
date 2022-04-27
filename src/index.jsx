import React from "react"; /*importe da biblioteca react*/
import ReactDOM from "react-dom"; /*renderiza documentos em tela (importa) - biblioteca reactDOM*/
import Home from "./components/Home"; /*importe componentes*/
import "./index.css";


ReactDOM.render(
  /*renderizando a biblioteca reactDOM - renderiza o que está dentro do parenteses*/
  <React.StrictMode>
    <Home />
  </React.StrictMode> /* alerta para problemas na documentação*/,
  document.getElementById(
    "root"
  ) /* no index.html no body tem uma div com id chamado root, é lá que os componentes são renderizados. Aqui é onde aponta que isso irá acontecer*/
);
