import React from 'react';
import contacts from '../contacts.json';
    
//randomly select a contact from the larger contacts array.
//Then add that contact to the array that lives in your state (that's the previously created array of 5). Don't forget to setState() to cause React to re-render the app.

class ContactsList extends React.Component {
    state = {
        contacts: contacts.slice(0,5)
    }

    randomcontact = () => {
      return Math.floor(Math.random()*(contacts.length - 5)+5) // ]5, nb contact total[
    }

    deleteActor = (name) => {
      const actorsCopy = [...this.state.contacts];
      const actorIndex = actorsCopy.findIndex(actor => actor.name === name);
      actorsCopy.splice(actorIndex, 1);
      this.setState({
        contacts:actorsCopy 
      })
    }


    

    render() {

        return (
          <div className="fiche">
            <h1>IronContacts</h1> 
            <button onClick={(event)=> {
              this.setState({
                contacts: [
                  ...this.state.contacts,
                //fonction qui va chercher une fiche random
                  contacts[this.randomcontact()]
                ]
                
              })
            }}>Add Random Contact
            </button>
            <button onClick={(event)=> {
              this.setState({
                contacts: [
                  ...this.state.contacts.sort(
                    (a, b) => (a.name > b.name) ? 1 : -1
                  )
                ]
                
              })
            }}>Sort by name
            </button>
             <button onClick={(event)=> {
              this.setState({
                contacts: [
                  ...this.state.contacts.sort(
                    (a, b) => (a.popularity > b.popularity) ? -1 : 1
                  )
                ]
                
              })
            }}>Sort by popularity</button>
            
            <table>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>
            {this.state.contacts.map(person => (
                  <tr key={person.id}>
                    <td>
                      <img src={person.pictureUrl}></img>
                    </td>
                    <td>
                      {person.name}
                    </td>
                    <td>
                      {person.popularity}
                    </td>
                    <td>
                    <button onClick = {event => {this.deleteActor(person.name)}}>Delete</button>
                    </td>
                  </tr>
         
              ))} 
              </table>
            
          </div>
          );
    }
  };

export default ContactsList;

