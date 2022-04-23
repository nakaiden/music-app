const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    //host: 'music.c7xclwu5il92.us-east-1.rds.amazonaws.com',
    database: 'music',
    password: 'postgres',
    port: 5432
});

const getAllSongs = (req, res) => {
    pool.query('SELECT * FROM songs', (error, result) => {
        if(error){
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

const addSong = (req, res) => {
    try {
        const { song_name, artist, duration, play_count, track_listing } = req.body;
        pool.query(
            `INSERT INTO songs (song_name, artist, duration, play_count, track_listing) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [song_name, artist, duration, play_count, track_listing],
            (error, results) => {
                if (error) {
                    console.log(error, '<--- error here')
                    throw error;
                }
                console.log(results, "<--- result!")
                res.status(200).json(results.rows)
            }
        );
    } catch (e) {
        console.log("ERROR CAUGHT! " + err.message)
    }
};

const deleteSongById = (req, res) => {
    const song_id = parseInt(req.params.song_id);

    pool.query(`DELETE FROM songs WHERE song_id=${song_id}`, (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

const updateSongNameById = (req, res) => {
    const { song_id } = req.params;
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);

    // Adding to our UPDATE sql statement
    const configureString = () => {
        // Building the column / value pairs after our SET keyword 
        let sqlStatement = '';
        // Iterating over our keys from our request body and building our sqlStatement
        for(let i = 0; i < keys.length; i++){
            // If we are looking at the last key, we want to omit the comma...
            if(i === keys.length-1) sqlStatement += `${keys[i]}=$${i+1}`
            // ... otherwise, we want to add it because there are more column/value pairs
            else sqlStatement += `${keys[i]}=$${i+1}, `
        }
        return sqlStatement;
    }

    pool.query(
        `UPDATE songs SET ${configureString()} WHERE song_id=$${keys.length+1}`,
        [...values, song_id],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
}

module.exports = {
    addSong,
    getAllSongs,
    deleteSongById,
    updateSongNameById
}