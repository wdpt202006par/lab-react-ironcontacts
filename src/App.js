import React from 'react';
import json from './contacts.json';
import './App.css';

class App extends React.Component {

state ={
  contacts : json.slice(0, 5)
}
 
// selection aleatoire dans contact.json ]5; max contact]
randomcontact = () => {
  return Math.floor(Math.random()*(json.length -5 ) + 5)
}

deletecontactHandler = id => {
  const contactsCopy = [...this.state.contacts]; // <== notice the spread operator here!
  const contactsIndex = contactsCopy.findIndex(item => item.id === id);
  contactsCopy.splice(contactsIndex, 1);
  this.setState({
    contacts: contactsCopy
  });
};

render(){
  return (

    <div className="App">
    <h1>IronContacts</h1>
    
    <button onClick={(event) =>{
      this.setState({
        contacts :[
          ...this.state.contacts,
         json[this.randomcontact()]
        ]
      })
    }}
    >Add random contact</button>
    
    <button onClick={(event2) =>{
      this.setState({
        contacts: [
         ...this.state.contacts.sort((a,b) => (a.name > b.name) ? 1 : -1
         )
        ]
      })
    }}
    >Sort by name</button>

    <button onClick={(event3) =>{
      this.setState({
        contacts: [
         ...this.state.contacts.sort((a,b) => (a.popularity > b.popularity) ? -1 : 1
         )
        ]
      })
    }}
    >Sort by popularity</button>

      <table>
        <tr className="titles">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {this.state.contacts.map (el => {
           return(
            <tr>
          <td className ="element-table">
            <img className ="photo" src={el.pictureUrl}/>
          </td>
          <td className ="element-table">
           <h3>{el.name}</h3>
          </td>
          <td className ="element-table">
           <h3>{el.popularity.toFixed(2)}</h3>
          </td>
          <td className ="element-table">
           {/* <button onClick={(event4) =>{
      this.setState({
        contacts: [
         ...this.state.contacts = this.deletecontactHandler(item.id)
         
        ]
      })
    }}
    >Delete</button> */}
          </td>
        </tr> 
           )  
        })}
      </table>
    </div>
  );
}
  
}

export default App;
