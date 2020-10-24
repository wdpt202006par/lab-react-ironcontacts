import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

let fiveContacts = contacts.slice(0,5);


class Table extends React.Component {
  state = {
    tableContacts : fiveContacts
  };

  getRandomContact = () => {
    let index = Math.floor(Math.random()* (contacts.length-6) + 6);
    return contacts[index];
  };

  sortByName = () => {
    this.setState({
      tableContacts : [...this.state.tableContacts].sort(function (a,b) {
        return a.name.localeCompare(b.name);
      })

    });
  }

  sortByPopularity = () => {
    this.setState({
      tableContacts : [...this.state.tableContacts].sort(function (a,b) {
        return a.popularity - b.popularity;
      })

    });
  }

  delete = (name) => {
    const tableContactCopy = [...this.state.tableContacts];
    const indexToRemove = tableContactCopy.findIndex(el => el.name === name)
    tableContactCopy.splice(indexToRemove,1);
    this.setState({
      tableContacts:tableContactCopy
    })
  }

  render() {
    return(
      <>
      <h1>IronContacts</h1>
      <button onClick = {(event) => {
        this.setState({
          tableContacts : [
            ...this.state.tableContacts, 
            this.getRandomContact()
          ]
        })
      }}>Add Random Contact</button>
      <button onClick = {this.sortByName}>Sort by Name</button>
      <button onClick = {this.sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </thead>
        <tbody>
        {this.state.tableContacts.map(contact => (
          <tr key ={contact.id}>
            <td>
              <img src={contact.pictureUrl} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td><button onClick = {event => {
              this.delete(contact.name)
            }}>Delete</button></td>
          </tr>
        ))}
          
        </tbody>
      </table>
      </>
    )
  }


}

function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
