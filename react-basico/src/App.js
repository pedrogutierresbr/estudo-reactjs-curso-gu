import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario.js";

class App extends Component {
    state = {
        comentarios: [
            {
                nome: "João",
                email: "joao@joao.com.br",
                data: new Date(2020, 30, 19),
                mensagem: "Olá, tudo bem?",
            },
            {
                nome: "Pedro",
                email: "pedro@pedro.com.br",
                data: new Date(2020, 30, 22),
                mensagem: "Olá, tudo bem sim ....",
            },
        ],
    };

    render() {
        return (
            <div className="App">
                <h1>Meu Projeto</h1>

                {this.state.comentarios.map((comentario, indice) => (
                    <Comentario
                        key={indice}
                        nome={comentario.nome}
                        email={comentario.email}
                        data={comentario.data}
                    >
                        {comentario.mensagem}
                    </Comentario>
                ))}
            </div>
        );
    }
}

export default App;
