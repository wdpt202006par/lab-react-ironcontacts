import React from 'react';
import contacts from '../contacts.json';

class List extends React.Component{
  state={
    contacts:contacts.splice(0,5)
  }
  getRandomContact = (event) => {
      let randomNumber = Math.floor(Math.random()*contacts.length+5);
      let randomContact = contacts[randomNumber];
      this.setState({
        contacts: [...this.state.contacts,randomContact]
      })
  }
  sortByName = (event) => {
    let copiedContacts = this.state.contacts;
    copiedContacts.sort(function(a,b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    } )
    this.setState({
      contacts: copiedContacts
    })
  }

  sortByPopularity = (event) => {
    let copiedContacts = this.state.contacts;
    copiedContacts.sort(function(a,b) {
      return a.popularity-b.popularity
    } )
    this.setState({
      contacts: copiedContacts
    })
  }

  render(){
    console.log(this.state.contacts);
    return (
      <div >
        <h1>IRON CONTACTS</h1>
        <button onClick={(event)=> this.getRandomContact()}>Add Random Contact</button>
        <button onClick={(event)=> this.sortByName()}>Sort By Name</button>
        <button onClick={(event)=> this.sortByPopularity()}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact=>
              <tr key={contact.id}>
                <td><img style={{height:'100px'}} src={contact.pictureUrl} alt=""></img></td>
                <td>{contact.name} </td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  };
}
  export default List;