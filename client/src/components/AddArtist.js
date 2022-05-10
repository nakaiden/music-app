import React, { useState } from 'react';
import { postToTable } from './networkRequests';

export default function AddArtist(props){
    const [state, setState] = useState({
        name: "",
        age: "",
        img: ""
     });

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value });
    }

    const submitArtist = () => {
        postToTable('artists', state)
            .then(refresh);
    }

    const refresh = () => {
        // $todo make this dyanmic isntead of statically resetting

        // after adding a song we want to make sure to clear the inputs so a user can add another song
        setState({
            name: "",
            age: "",
            img: ""
        });

        // props are attributes passed from parent components into child components
        // after submitting a new song we need the users list of songs to update so they can see the new song
        props.refresh();
    }

    return(
        <div className="add-song-wrap">
            <h1>Add Artist!</h1>
           {/* Need to use state because thats where the data is
            Array.map*/
            Object.keys(state).map(key => <>
                <label>{key}</label>
                <input onChange={handleChange} name={key} value={state[key]}/>
            </>)}
            
            <button onClick={submitArtist}>Submit</button>
        </div>
    )
}