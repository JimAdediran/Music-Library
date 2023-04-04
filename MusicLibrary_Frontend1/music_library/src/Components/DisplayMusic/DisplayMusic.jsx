import DeleteButton from "../DeleteButton/DeleteButton";


const DisplaySong = (props) =>{





    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song)=>{
                        return(
                            <tr key={song.id}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <DeleteButton id={song.id} getAllSongs={props.getAllSongs}/>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplaySong;