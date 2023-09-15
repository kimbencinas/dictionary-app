import React, { useState, useEffect } from 'react'
import Dictionary from './Components/Dictionary'
import Search from './Components/Search'
import './App.css'
import Navbar from './Components/Navbar'

export default function App() {
  const [searchWord, setSearchWord] = useState('');
  const [definition, setDefinition] = useState([]);

  useEffect(() => {
    if (searchWord) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then((response) => response.json())
        .then((data) => {
          setDefinition(data[0]?.meanings || []);
        });
    }
  }, [searchWord]);

  return (
    <div className="app">
      <Navbar onSearch={setSearchWord} />
      <div className="container">
        <div className="body">
          <Dictionary word={searchWord} definition={definition} />
        </div>
      </div>
    </div>
  )
}
