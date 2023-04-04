import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AddSong from './Components/AddSong/AddSong';
import DisplaySong from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

const [songs, setSongs] = useState([]);

useEffect(() => {
  getAllSongs();
}, [])

async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/music/');
  console.log(response.data)
  setSongs(response.data)
}

  return (
    <div className='background'>
      <div className='header'><h3>Music Library</h3></div>
      <div className='header'><SearchBar songs={songs} setSongs={setSongs}/></div>
      <div className='header'><DisplaySong className='header' songs={songs}  getAllSongs={getAllSongs}/></div>
      <div className='header'><AddSong getAllSongs={getAllSongs} /></div>
    </div>
  
  );
}

export default App;
