const express = require('express');
const app = express();
const db = require('./queries.js');
const port = 3030;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ info: "Hello there"});
})

app.get('/songs', db.getAllSongs);

app.post('/songs', db.addSong);

app.delete('/songs/:song_id', db.deleteSongById);

app.put('/songs/:song_id', db.updateSongNameById);

app.listen(port, () => {
    console.log(`App running on ${port}...`)
});