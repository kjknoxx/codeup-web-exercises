//String to call and hold the openWeather map API
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`

//Calling the Map to the MAPBOX div
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 11, // starting zoom
});

//This will be fetching
fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${weatherToken}`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather));
