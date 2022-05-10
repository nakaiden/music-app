DROP TABLE songs;
DROP TABLE artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT,
    img TEXT
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artistId INT REFERENCES artists(id),
    name TEXT NOT NULL,
    duration TEXT NOT NULL,
    play_count VARCHAR(50),
    img TEXT
);

INSERT INTO artists VALUES(DEFAULT, 'Jay Z', 52,'https://images.entertainment.ie/uploads/2021/11/05092657/GettyImages-1346486908.jpg?w=1280&h=768&q=high');

INSERT INTO songs VALUES (DEFAULT, 1, 'Song Cry', '5:03', 0, 'https://i.discogs.com/lgxYHTfoiQe4WSHpqgEvHf9UcqTXv7CJxPUOlPK32Kw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMjk5/MTEtMTYxMDM5MDA3/Ni01Njc5LmpwZWc.jpeg');
