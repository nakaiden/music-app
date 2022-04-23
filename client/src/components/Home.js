import React from 'react';
import AddSongs from './AddSong';
import { getAllSongs } from './networkRequests';

class Home extends React.Component {
    state = {
        songs: []
    }
    
    componentDidMount(){
        getAllSongs().then(res => {
            this.setState({ songs: res });
        });
    }

    render(){
        return (
            <div>
                <AddSongs />
                <ul>
                    {this.state.songs.map(song => <li key={song.song_id}>{song.song_name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Home;