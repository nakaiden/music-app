CREATE TABLE songs (
    song_id SERIAL PRIMARY KEY,
    song_name TEXT NOT NULL,
    artist TEXT NOT NULL,
    duration TEXT NOT NULL,
    play_count VARCHAR(50),
    track_listing INTEGER
);

INSERT INTO songs VALUES (DEFAULT, 'Song Cry', 'Jay-Z', '5:03', 0, 10);