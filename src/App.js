import React from 'react';
import './App.css';
import './css/styles.css'
import Search from './containers/Search'
import UsefulData from './containers/UsefulData'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p />
      	<h3>Songsterr's Search</h3>
	<Search />
	<hr />
 	<UsefulData />
      </header>
    </div>
  );
}

export default App;
