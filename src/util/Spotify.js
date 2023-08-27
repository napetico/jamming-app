const CLIENT_ID = '120bf3663c994eb68f836c4e0276b161';
const REDIRECT_URI = 'http://localhost:3000/';
//const CLIENT_SECRET = '060b86f4d6fa476db83df847ac57972f';

const Spotify = {

    printURI (uriArray) {
        console.log(uriArray);
    },

    getAccessToken () {
        const authURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
        window.location.replace(authURL);
    }
}

export default Spotify;