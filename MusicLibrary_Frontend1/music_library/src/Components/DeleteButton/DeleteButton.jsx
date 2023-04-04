import axios from "axios";


const DeleteButton = (props) => {
    
    async function deleteSong(){
        const response = await axios.delete(`http://127.0.0.1:8000/music/${props.id}/`)
        console.log(response.data)
        props.getAllSongs()
    }
    
    return(
       <button onClick={deleteSong}>Delete Song</button>
    );
}

export default DeleteButton