import React from 'react'


export  function Saludo() {

    function manejadorClick() {

        alert('Hola Buenas!!!');
      }
    

    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Esto es un parrafo</p>
            <button onClick={ manejadorClick}>Click</button>
        </div>
    )

}