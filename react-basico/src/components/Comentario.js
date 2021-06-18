import React from "react";
import "./Comentario.css";
import imagemUsuario from "./user.png";

const Comentario = (props) => {
    return (
        <div className="Comentario">
            <img className="avatar" src={imagemUsuario} alt={props.nome}></img>
            <div className="conteudo">
                <h1 className="nome">{props.nome}</h1>
                <p className="email">{props.email}</p>
                <p className="mensagem">{props.children}</p>
                <p className="data">{props.data.toString()}</p>
                <button onClick={props.onRemove}>&times;</button>
            </div>
        </div>
    );
};

export default Comentario;
