import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  addContact = () => {
    const randomContact = contacts[Math.floor((Math.random() * contacts.length -1) + 1)]
    this.setState({
      contacts: [
        ...this.state.contacts,
        randomContact
      ]
    })
  }

  sortByName = () => {
    const sortContacts = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortContacts
    })
  }

  sortByPopularity = () => {
    const sortPop = this.state.contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortPop
    })
  }

  render() {
    return(
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
