import React from "react";
import "./App.css";
import Comentario from "./components/Comentario.js";

function App() {
    return (
        <div className="App">
            <h1>Meu Projeto</h1>
            <Comentario />
            <Comentario />
        </div>
    );
}

export default App;
