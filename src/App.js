import React from 'react';
import contacts from './contacts.json';
import ContactsList from './components/contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactsList/>
    </div>
  );
}

export default App;
