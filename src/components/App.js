import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import './App.css';
function App() {
 
  const [pokemonName,setpokemonName]= useState("");
  const [pokemonChosen,setpokemonChosen]=useState(false);
  const [pokemon,setpokemon]= useState({
    name:"",
    BaseExperience:"",
    img: "",
    weight:"",
    order:"",

  });


  const searchPokemon=  ()=>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
      console.log(response);
                        
    setpokemon({
       
      name:response.data.name,
      BaseExperience: response.data.base_experience,
      img: response.data.sprites.front_default,
      weight:response.data.weight,
      order:response.data.order,
    
     





    });
    setpokemonChosen(true);
  }
    );

  };
 
  return (
    <div className='App'>
      <div className='TitleSection'>
      <h1>Pokenmon Stats</h1>
      <input type="text" onChange={(e)=>{setpokemonName(e.target.value)}}></input>
      <button onClick={searchPokemon}>Search Pokemon</button>

      </div>
      <div className='DisplaySection'>{!pokemonChosen ?(<h1>Please Choose a Pokemon</h1>):(
        <div className='Card'>
          <img src={pokemon.img} />
          <div className='Container'>
          <h1><b>{pokemon.name}</b></h1>
          <h3>Base Experience:{pokemon.BaseExperience}</h3>
          <h3>Weight:{pokemon.weight}</h3>
          <h3>Order:{pokemon.order}</h3>

          </div>
        </div>

        
      
      
      
      )}


      </div>
    </div>
  );
}

export default App;
