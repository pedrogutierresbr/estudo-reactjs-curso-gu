import React from "react";
import "./App.css";
import Comentario from "./components/Comentario.js";

function App() {
    return (
        <div className="App">
            <h1>Meu Projeto</h1>
            <Comentario
                nome="João"
                email="joao@joao.com"
                data={new Date(2020, 30, 19)}
            >
                Olá, tudo bem?
            </Comentario>
            <Comentario
                nome="Maria"
                email="maria@maria.com"
                data={new Date(2020, 30, 21)}
            >
                Olá, tudo bem sim!
            </Comentario>
        </div>
    );
}

export default App;
