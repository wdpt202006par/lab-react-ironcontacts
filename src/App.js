import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import List from './component/cardList'

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
