import React, {useState} from "react";

const SearchBar = (props) => {
    
 const [searchTerm, setSearchTerm] = useState()

 function searchSongs(event){
    event.preventDefault();
    let response = props.songs.filter((song) =>{
        if(song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
           song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
           song.release_date.includes(searchTerm) ||
           song.genre.toLowerCase().includes(searchTerm.toLowerCase())){
            return true; 
           }
           else{
            return false;
           }
    });
    props.setSongs(response)
 }
    
    return(
       <form onSubmit={searchSongs}>
            <input placeholder="Search Songs" type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit'>Search</button>
       </form>
    )
}

export default SearchBar;