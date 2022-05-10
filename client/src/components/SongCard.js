import { useState } from 'react';
import { updateRowInTable } from './networkRequests';

export default function SongCard(props){
    // deserialize value of song from props
    // create a const song that has the value of props.song
    const {song} = props;
    // the data that we will be updating to send to the server
    const [data, setData] = useState(props.song);
    // we state value for if we are editing
    const [editing, setEditing] = useState(false);
    
    // update state to turn to inverse the value of editing
    const toggleEdit = () => setEditing(!editing);

    const updateSongClick = () => {
        // submit updated data to api
        updateRowInTable('songs', data)
            .then(()=>{
                setData({});
                props.refresh();
            })
        // then refresh
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
    }
    
    // when we click the song we want to start editing
    return <li key={song.id}>
        <img className='mini' src={song.img} alt={song.name} onClick={toggleEdit}/>
        {song.name} 
        {editing && <>
            <h4>Edit:</h4>
            {Object.keys(data).map(columnName => columnName !== 'artistId' && <div key={columnName}>
                <label>{columnName}</label>
                <input onChange={handleChange} name={columnName} value={data[columnName]}/>
            </div>)}
            <button onClick={updateSongClick}>Submit</button>
            <button onClick={toggleEdit}>Cancel</button>
        </>}
    </li>
}