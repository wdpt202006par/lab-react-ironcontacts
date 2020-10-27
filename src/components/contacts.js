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

    deleteActor = id => {
      const actorsCopy = this.state.contacts;
      const actorIndex = actorsCopy.findIndex(actor => actor.id === id);
      actorsCopy.splice(actorIndex, 1);
      this.setState({
        actors:actorsCopy 
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
            <ul>
              {this.state.contacts.map(person => (
                <li key={person.id}>
                  <div>
                  name={person.name}
                  </div>
                  <img src={person.pictureUrl}></img>
                  <div>
                  popularity={person.popularity}
                  </div>
                  <div>
                    <button onClick={this.deleteActor}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          );
    }
  };

export default ContactsList;

