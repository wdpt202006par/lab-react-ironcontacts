import React from 'react';
import json from './contacts.json';
import './App.css';

class App extends React.Component {

state ={
  contacts : json.slice(0, 5)
}
 
render(){
  return (
    <div className="App">
    <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.state.contacts.map (el => {
           return(
            <tr>
          <td>
            <img className ="photo" src={el.pictureUrl}/>
          </td>
          <td className ="name">
           <h3>{el.name}</h3>
          </td>
          <td className ="popularity">
           <h3>{el.popularity.toFixed(2)}</h3>
          </td>
        </tr> 
           )
           
        })}
      
      </table>
    </div>
  );
}
  
}

export default App;
