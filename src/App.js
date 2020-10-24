import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  render() {
    return(
      <div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <tr>
                <td><img src={contact.pictureUrl} alt="Contact"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
