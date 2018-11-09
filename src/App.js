import React, { Component } from "react";
import "../src/style/style.css";

class App extends Component {
  state = {
    members: [
      {
        id: "0",
        telefon: "+380991",
        name: "Ross",
        company: "Ross Company",
        email: "ross@mail.com",
        foto: "fotoRoss"
      },
      {
        id: "1",
        telefon: "+380992",
        name: "Terry",
        company: "Terry Company",
        email: "terry@mail.com",
        foto: "fotoTerry"
      },
      {
        id: "2",
        telefon: "+380993",
        name: "Abby",
        company: "Abby Company",
        email: "abby@mail.com",
        foto: "fotoAbby"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        {this.state.members.map(elem => {
          return (
            <div className="contact">
              <div key={elem.id}>
                <div>Name: {elem.name}</div>
                <div>Telefon: {elem.telefon}</div>
                <div>Company: {elem.company}</div>
                <div>Email: {elem.email}</div>
                <div>Foto: {elem.foto}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
