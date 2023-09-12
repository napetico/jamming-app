const CLIENT_ID = '120bf3663c994eb68f836c4e0276b161';
const REDIRECT_URI = 'https://napetico.github.io/jamming-app';
//const CLIENT_SECRET = '060b86f4d6fa476db83df847ac57972f';
let accessToken;
let userId;

const Spotify = {
    // Redirect user to Spotify Auth page when loggin button is clicked
    getAuth () {
        const tokenURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location = tokenURL;
    },

    // Checks URL on page load - if there's a token to stract, it runs.
    checkAuth() {
        const authenticated = window.location.href.match(/access_token=([^&]*)/);
        if (authenticated) {
            accessToken = authenticated[1];
            return true;
        } else {
            return false;
        }
    },

    getUserName() {
        if(!accessToken) {
            return Promise.reject(new Error('Access token is missing'));
        }
        const nameEndpoint = 'https://api.spotify.com/v1/me';
        return fetch(nameEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to fetch user data');
             }
        })
        .then((data) => {
            const userName = data.display_name;
            userId = data.id;
            return userName;         
        });
    },

    searchTracks(searchInput) {
        const searchEndpoint = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`
        
        return fetch(searchEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })
        .then(response => response.json())
        .then((data) => {
            const tracksResults = data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                image: track.album.images[0].url,
                uri: track.uri,
            }));
            return tracksResults;
        });
    },

    createPlaylist(listName, urisArray) {
        const createListURL = `https://api.spotify.com/v1/users/${userId}/playlists`;
        const playlistData = {
            'name': listName,
        }
        return fetch(createListURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playlistData),
        })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Failed to create playlist');
            }
        })
        .then((data) => {
            const playlistId = data.id;
            const tracksToAdd = {
                'uris': urisArray,
            }
            
            const addTracksURL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
            return fetch(addTracksURL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tracksToAdd),
            })
        })
        .then((res) => res.json())
        .then((result) => {
            if(result) {
                return true;
            } else {
                return false;
            }
        });
    }
}

export default Spotify;