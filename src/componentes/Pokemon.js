import React from "react";
import "../hojas-de-estilo/Pokemon.css" ;

 function Pokemon(props) {
  return (
    <div className="contenedor-pokemon">
      <img 
        className="imagen-pokemon" 
        src={require(`../imagenes/${props.imagen}.png`)} 
        alt="Foto de pokemon" />

      <div className="contenedor-texto-pokemon" >
        <p className="nombre-pokemon">{props.nombre}</p>
        <p className="tipo-pokemon">{props.tipo}</p>
        <p className="descripcion-pokemon">{props.descripcion}</p>
      </div>

    </div>
  );
}

export default Pokemon;
