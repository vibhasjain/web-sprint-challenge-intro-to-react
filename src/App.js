import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {

  const [characters, setCharacters] = useState([])

  useEffect( () => {

    axios.get('https://swapi.dev/api/people')
    .then( data => {
        console.log(data.data);
        setCharacters(data.data);
    })

  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      characters.map(char => {
        return <Character key={char.id} info={char}/>

      })}
    </div>
  );
}

export default App;
