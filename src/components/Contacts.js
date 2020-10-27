// import React from 'react';
// import json from '../contacts.json';

// const someContacts = json.slice(0, 5);

// class Contacts extends React.Component {
//   state = {
//     contacts: someContacts,
//   };
//   render() {
//     return (
//       <>
//         <table>
//           <thead>
//             <tr>
//               <th>IronContacts</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Picture</td>
//               <td>Name</td>
//               <td>Popularity</td>
//             </tr>
//             {this.state.contacts.map((contact) => {
//               <tr key={contact.id}>
//                 <td>
//                   <img src={contact.pictureUrl} alt=""></img>
//                 </td>
//                 <td>{contact.name}</td>
//                 <td>{contact.popularity}</td>
//               </tr>;
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

// export default Contacts;

import React, { Component } from 'react';

import json from '../contacts.json';
class Contacts extends Component {
  state = {
    contacts: json.slice(0, 5),
    fullContact: json,
  };
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button
          onClick={(event) => {
            var randIndex = Math.round(
              Math.random() * (this.state.fullContact.length - 1)
            );

            this.setState({
              contacts: [
                ...this.state.contacts,
                this.state.fullContact[randIndex],
              ],
            });
          }}
        >
          ADD NEW RANDOM CONTACT
        </button>
        <button
          onClick={(event) => {
            //récuperer full contact et prendre l'array d'objets, copie et sort
            let sortedContact = this.state.fullContact.slice().sort((a, b) => {
              var nameA = a.name.toUpperCase();
              var nameB = b.name.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            });
            console.log(sortedContact);
            //change le state avec setState et changer la liste qui s'affiche
            this.setState({
              contacts: sortedContact,
            });
          }}
        >
          Sort by name
        </button>
        <button
          onClick={(event) => {
            //récuperer full contact et prendre l'array d'objets, copie et sort
            let popularContact = this.state.fullContact.slice().sort((a, b) => {
              return b.popularity - a.popularity;
            });
            console.log(popularContact);
            //change le state avec setState et changer la liste qui s'affiche
            this.setState({
              contacts: popularContact,
            });
          }}
        >
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt=""
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Contacts;
