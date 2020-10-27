import React from 'react';

// export listContacts = numbers.map((el, i) => <td key={i}</td>);

class Contacts extends React.Component {
  
// constructor(props) {
  
//   super(props);
  
//   this.state = {contacts:ContactsList.slice(0,5)}
//     // name: props.name,
//     // pictureUrl: props.pictureUrl,
//     // popularity : props.popularity,
//     // id: props.id
// }

render () {
  console.log('props are: ', this.props)
  return (

  <div className = "Contactdiv">

    <tr>
        <td> <img src ={this.props.pictureUrl} alt ="pic" style = {{width: "50px"}} /> </td>
        <td> {this.props.name}</td>
        <td> {this.props.popularity}</td>
    </tr>
    
  </div>
  )
}

}


export default Contacts;


/*
{
  default: 
  Contacts: class {}
  
}
*/