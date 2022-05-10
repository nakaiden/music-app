import React, { useState, useEffect } from 'react';
import { addSong, getAllFromTable } from './networkRequests';

export default function AddSong(props){
    // internal memory for this component
    const [state, setState] = useState({
        name: "",
        duration: "",
        play_count: "",
        img: ""
     });

     const [artists, setArtists] = useState([])
     useEffect(() => {
         getAllFromTable('artists')
            .then(res => setArtists(res))
     }, []);


    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value });
    }

    const submitSong = () => {
        addSong(state)
            .then(refresh);
    }

    const refresh = () => {
        // $todo make this dyanmic isntead of statically resetting

        // after adding a song we want to make sure to clear the inputs so a user can add another song
        setState({
            name: "",
            duration: "",
            play_count: "",
            img: ""
        });

        // props are attributes passed from parent components into child components
        // after submitting a new song we need the users list of songs to update so they can see the new song
        props.refresh();
    }

    return(
        <div className="add-song-wrap">
            <h1>Add Song!</h1>
            <label>Artist: </label>
            <select onChange={handleChange} name='artistId'>
                {/* <option value='1' name='artistId'>Jay Z</option> */}
                {artists.map(artist => <option key={artist.id} value={artist.id}>{artist.name}</option>)}
            </select>
           {/* Need to use state because thats where the data is
            Array.map*/
            Object.keys(state).map(columnName => columnName !== 'artistId' && <div key={columnName}>
                <label>{columnName}</label>
                <input onChange={handleChange} name={columnName} value={state[columnName]}/>
            </div>)}
            
            <button onClick={submitSong}>Submit</button>
        </div>
    )
}