import React, { Component } from "react";
import "../src/style/style.css";

class App extends Component {
  state = {
    search: '',
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

updateSearch = (e) => {
  this.setState({search: e.target.value.substr(0, 20)})
}
  render() {
    let filteredContacts = this.state.members.filter( contact =>{
      return contact.name.indexOf(this.state.search) !==-1
    }
      
    )
    return (
      <div className="App">
      <input 
      onChange={this.updateSearch.bind(this)} 
      className='search' 
      type='text' 
      value={this.state.search}
      placeholder='Enter name'></input>
        {filteredContacts.map(elem => {
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
