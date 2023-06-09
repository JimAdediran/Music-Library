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
      <div className='header'><h1>Music Library</h1></div>
      <div className='header'><SearchBar songs={songs} setSongs={setSongs}/></div>
      <div className='header'><DisplaySong className='header' songs={songs}  getAllSongs={getAllSongs}/></div>
      <div className='header'><AddSong getAllSongs={getAllSongs} /></div>
      <div className='footer'>Build <br></br>Your<br></br>Music<br></br>Library<br></br>Here!
      <br></br>Add Your Favorite Songs and Albums!</div>
    </div>
    
  );
}

export default App;
