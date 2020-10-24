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
      <table>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {/* [<tr>...</tr>, ] */}
        {this.state.contacts.map (el => {
           return(
            <tr>
          <td>
            <img src={el.pictureUrl}/>
          </td>
          <td>
           {el.name}
          </td>
          <td>
           {el.popularity}
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
