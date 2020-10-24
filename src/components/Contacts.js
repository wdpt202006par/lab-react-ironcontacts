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
  };
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
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
