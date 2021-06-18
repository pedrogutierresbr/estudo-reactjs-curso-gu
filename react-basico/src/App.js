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
        novoComentario: {
            nome: "",
            email: "",
            mensagem: "",
        },
    };

    adicionarComentario = (evento) => {
        evento.preventDefault();
        console.log("adicionando comentario...");
        const novoComentario = {
            ...this.state.novoComentario,
            data: new Date(),
        };

        this.setState({
            comentarios: [...this.state.comentarios, novoComentario],
            novoComentario: {
                nome: "",
                email: "",
                mensagem: "",
            },
        });
    };

    digitacao = (evento) => {
        const { name, value } = evento.target;
        this.setState({
            novoComentario: { ...this.state.novoComentario, [name]: value },
        });
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

                <form method="POST" onSubmit={this.adicionarComentario}>
                    <h2>Adicionar novo comentário</h2>
                    <div>
                        <input
                            type="text"
                            name="nome"
                            value={this.state.novoComentario.nome}
                            onChange={this.digitacao}
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={this.state.novoComentario.email}
                            onChange={this.digitacao}
                            placeholder="Digite seu email"
                        ></input>
                    </div>
                    <div>
                        <textarea
                            name="mensagem"
                            value={this.state.novoComentario.mensagem}
                            onChange={this.digitacao}
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit">Adicionar comentário</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
