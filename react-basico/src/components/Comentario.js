import React from "react";
import "./Comentario.css";

const Comentario = (props) => {
    return (
        <div className="Comentario">
            <h1>{props.nome}</h1>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    );
};

export default Comentario;
