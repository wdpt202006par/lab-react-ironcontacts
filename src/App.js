import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsJson from './contacts.json';
import Contacts from './components/contact.js';

class App extends React.Component {


constructor(props) {
  
  super(props);
  
  this.state = {contacts:ContactsJson.slice(0,5)}
    // name: props.name,
    // pictureUrl: props.pictureUrl,
    // popularity : props.popularity,
    // id: props.id
}

addButton(){
  let randomContact = ContactsJson[Math.floor(Math.random()* ContactsJson.length)]
  this.setState({
contacts : [...this.state.contacts,randomContact]

  })
}

render(){
  return (
    <div className="App">
    
    <h1>Ironcontacts</h1>
    <button onClick ={this.addButton}>Add a random contact</button>

<table>
        <thead>
            <tr>
                <th >Picture</th>
                <th >Name</th>
                <th >Popularity</th>
            </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(contact => (
            <Contacts {...contact}/>
          ))}
        </tbody>
  </table>


    </div>
  );
}
}

export default App;
