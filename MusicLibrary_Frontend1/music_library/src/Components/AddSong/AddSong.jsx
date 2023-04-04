import React, {useState} from 'react';
import axios from 'axios'


const AddSong = (props) => {

async function AddNewSong(newSong){
    const response= await axios.post("http://127.0.0.1:8000/music/", newSong);
    console.log(response.data)
    props.getAllSongs()
}
    
const [title, setTitle] = useState('');
const [artist, setArtist] = useState('');
const [album, setAlbum] = useState('');
const [releaseDate, setReleaseDate] = useState('');
const [genre, setGenre] = useState('');

function handleSubmit(event){
    event.preventDefault();
    let newSong={
        title: title,
        artist: artist,
        album: album,
        release_date: releaseDate,
        genre: genre,
    };
    AddNewSong(newSong)
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(event)=> setTitle(event.target.value)}/>
                <label>Artist</label>
                <input value={artist} onChange={(event)=> setArtist(event.target.value)}/>
                <label>Album</label>
                <input value={album} onChange={(event)=> setAlbum(event.target.value)}/>
                <label>Release Date</label>
                <input type="date" value={releaseDate} onChange={(event)=> setReleaseDate(event.target.value)}/>
                <label>Genre</label>
                <input value={genre} onChange={(event)=> setGenre(event.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default AddSong;