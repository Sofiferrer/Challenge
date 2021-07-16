import React, { useState } from 'react';
import './App.css'

function App() {
  // guardo url en una constante
  const url = 'https://some-random-api.ml/animal/cat'

  const [animal, setAnimal] = useState('')

  //busco data en api
  const fetchApi = async () => {
    const response = await fetch(url)
      .then(response => response.json())
      .then(json => setAnimal(json));
  }

  //funcion que recarga datos
  const cargarAnimal = () => {
    fetchApi()
  }


  return (
    <div className="App">
      <div className="contanier">
        <img src={animal.image} alt="imagen" className="animal-img" />
        <p className="animal-fact">{animal.fact}</p>
        <button className="button" onClick={() => cargarAnimal()}>CARGAR</button>
      </div>
    </div>
  );
}

export default App;
