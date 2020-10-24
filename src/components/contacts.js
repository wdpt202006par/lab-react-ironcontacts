import React from 'react';
import contacts from '../contacts.json';
    

class ContactsList extends React.Component {
    state = {
        contacts: contacts.slice(0,5)
    }
    render() {
        return (
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
                </li>
              ))}
            </ul>
          );
    }
  };

export default ContactsList;

