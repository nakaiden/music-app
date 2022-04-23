import React from 'react';
import { addSong } from './networkRequests';

const INITIAL_DATA ={
    song_name: "",
    artist: "",
    duration: "",
    track_listing: "" 
 }
class AddSong extends React.Component {
    state = INITIAL_DATA;

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = () => {
        addSong(this.state);
        this.setState({...INITIAL_DATA});
    }

    render(){
        return(
            <form className="add-song-wrap">
                <h1>Add Song!</h1>
                <label>Song name: </label>
                <input onChange={this.handleChange} value={this.state.song_name} name="song_name"></input>
                <label>Artist: </label>
                <input onChange={this.handleChange} value={this.state.artist} name="artist"></input>
                <label>Duration: </label>
                <input onChange={this.handleChange} value={this.state.duration} name="duration"></input>
                <label>Track Listing: </label>
                <input onChange={this.handleChange} value={this.state.track_listing} name="track_listing"></input>
                <button onClick={this.onClick}>Submit</button>
            </form>
        )
    }
}

export default AddSong;