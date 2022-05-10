export const api = "http://localhost:3030";

export const getAllSongs = async () => {
    const songs = await fetch(`${api}/songs`);
    return songs.json();
}

export const getAllArtists = async () => {
    const artists = await fetch(`${api}/artists`);
    return artists.json();
}

export const addSong = async (song) => {
    try {
        // const holdResponse = await fetch("http://localhost:3030/songs", {
        const holdResponse = await fetch(`${api}/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        });
        return holdResponse;

    } catch(error){
        console.log("Caught Error!! " + error)
    }
}

export const getAllFromTable = async table => {
    const songs = await fetch(`${api}/${table}`);
    return songs.json();
}

export const postToTable = async (table, data) => {
    try {
        const holdResponse = await fetch(`${api}/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return holdResponse;

    } catch(error){
        console.log("Caught Error!! " + error)
    }
}

export const updateRowInTable = async (table, data) => {
    try {
        const holdResponse = await fetch(`${api}/${table}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return holdResponse;

    } catch(error){
        console.log("Caught Error!! " + error)
    }
}