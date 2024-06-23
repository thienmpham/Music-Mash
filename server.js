

require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const redirect_uri = 'http://127.0.0.1:5500/home.html';

console.log(client_id);

function requestAuthorization() {
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "response_type=code";
    url += "&redirect_uri=" + redirect_uri;
    url += "&show_dialog=true";
    url += "&scope"
}