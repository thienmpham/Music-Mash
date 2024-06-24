

require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const redirect_uri = 'http://127.0.0.1:5500/home.html';

const AUTH_URL = `https://accounts.spotify.com/authorize?
client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}
scrope=user-read-currently-playing%20streaming%20playlist-read-private%20
playlist-modify-private%20playlist-modify-public%20user-follow-read%20
user-top-read%20user-library-modify%20user-library-read%20user-read-email%20
user-read-private%20`
console.log(client_id);

