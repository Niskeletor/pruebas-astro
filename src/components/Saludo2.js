import React from "react";

class Saludo2 extends React.Component {
  manejadorClick2() {
    alert("Hello How are you!!");
  }

  render() {
    return (
      <div>
        <br></br>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
        <button onClick={this.manejadorClick2}>saludo ingles</button>
      </div>
    );
  }
}

export default Saludo2;
