const CLIENT_ID = '120bf3663c994eb68f836c4e0276b161';
const REDIRECT_URI = 'http://localhost:3000/';
const CLIENT_SECRET = '060b86f4d6fa476db83df847ac57972f';
let accessToken;

const Spotify = {
    // To test the map to get the uri array from the playlist tracks
    /*printURI (uriArray) {
        console.log(uriArray);
    },*/

    getAuth () {

        /*const url = 'https://accounts.spotify.com/api/token';
        const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        };

        const body = new URLSearchParams();
        body.append('grant_type', 'client_credentials');
        body.append('client_id', '120bf3663c994eb68f836c4e0276b161');
        body.append('client_secret', '060b86f4d6fa476db83df847ac57972f');

        fetch(url, {
        method: 'POST',
        headers: headers,
        body: body.toString(),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });*/

        const queryParams = new URLSearchParams({
            response_type: 'code',
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
        });

        const authURL = `https://accounts.spotify.com/authorize?${queryParams}`;
        window.location.href = authURL;

        const authResponse = window.location.search;
        const authParams = new URLSearchParams(authResponse);

        const authCode = authParams.get('code');
        const authError = authParams.get('error');

        if (authError) {
            console.log(authError);
            return
        }

        const tokenURL = 'https://accounts.spotify.com/api/token';
        const base64Credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`); 
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,
            'Content Type': 'application/x-www-form-urlencoded',
            };
        const tokenBody = new URLSearchParams();
        tokenBody.append('grant_type', 'authorization_code');
        tokenBody.append('code', `${authCode}`);
        tokenBody.append('redirect_uri', `${REDIRECT_URI}`)

        fetch(tokenURL, {
            method: 'POST',
            headers: headers,
            body: tokenBody.toString(),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    },
}

export default Spotify;