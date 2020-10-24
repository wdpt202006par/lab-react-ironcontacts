import React from 'react';
import contacts from '../contacts.json';

class List extends React.Component{
  state={
    contacts:contacts.splice(0,5)
  }

  render(){
    console.log(this.state.contacts);
    return (
      <div >
        <h1>IRON CONTACTS</h1>
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
              <tr>
                <td><img style={{height:'100px'}} src={contact.pictureUrl} alt=""></img></td>
                <td>{contact.name} </td>
                <td>{contact.popularity}</td>
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