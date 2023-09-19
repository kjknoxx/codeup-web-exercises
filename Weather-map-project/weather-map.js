// import {weatherToken, mapToken} from "../js/keys";

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

// Function to take what's typed into search document to call geocode to search MAPBOX API to search information for the cards, then populates those cords with the populateCards() function.
function btnClick (event) {
    event.preventDefault();
    let search = document.getElementById('searchBox').value;
    geocode(search, mapToken).then(res => {
        populateCards(res, false);
    });
}

// Variable to start collection of date for current day weather.
const date = new Date()

// Function to populate cards (originally to searched based on what searchInput finds
function populateCards (res, reverse) {

    //current city projection
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        let currentCity = document.getElementById('current-city');
        currentCity.innerHTML = reverse ? `<h2>${res.features[3].place_name}</h2>`:`<h2>${res.features[0].place_name}</h2>`
    });

// Card 1 projection
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        let wcard1 = document.getElementById('card1');
        wcard1.innerHTML = `<h3>${data.main.temp}º F</h3>
                            <h4>${+date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}</h4>
                            <p>Feels like: ${data.main.feels_like}º F</p>`
    });

// Card 2 Projection
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        // console.log(data)
        let wcard2 = document.getElementById('card2');
        wcard2.innerHTML = `<h3>${data.list[8].main.temp}º F</h3>
                            <h4>${data.list[8].dt_txt.substring(0,10)}</h4>`
    });

// Card 3 Projection
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        let wcard3 = document.getElementById('card3');
        wcard3.innerHTML = `<h3>${data.list[16].main.temp}º F</h3>
                            <h4>${data.list[16].dt_txt.substring(0,10)}</h4>`
    });

// Card 4 Projection
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        let wcard4 = document.getElementById('card4');
        wcard4.innerHTML = `<h3>${data.list[24].main.temp}º F</h3>
                            <h4>${data.list[24].dt_txt.substring(0,10)}</h4>`
    });

// Card 5 Projection
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat:    res.features[0].center[1],
        lon:    res.features[0].center[0],
        units: "imperial"
    }).done(function(data) {
        let wcard5 = document.getElementById('card5');
        wcard5.innerHTML = `<h3>${data.list[32].main.temp}º F</h3>
                            <h4>${data.list[32].dt_txt.substring(0,10)}</h4>`
    });
}
// TODO: Get requests for base location: San Antonio, Texas, United States
// Current City projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    let currentCity = document.getElementById('current-city');
    currentCity.innerHTML = `<h2>${data.city.name}, Texas, United States</h2>`
});

// Card 1 projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    // console.log(data)
    let wcard1 = document.getElementById('card1');
    wcard1.innerHTML = `<h3>${data.list[0].main.temp}º F</h3>
                        <h4>${+date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}</h4>
                        <p>Feels like: ${data.list[2].main.feels_like}º F</p>`
});

// Card 2 Projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    // console.log(data)
    let wcard2 = document.getElementById('card2');
    wcard2.innerHTML = `<h3>${data.list[8].main.temp}º F</h3>
                        <h4>${data.list[8].dt_txt.substring(0,10)}</h4>`
});

// Card 3 Projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    let wcard3 = document.getElementById('card3');
    wcard3.innerHTML = `<h3>${data.list[16].main.temp}º F</h3>
                        <h4>${data.list[16].dt_txt.substring(0,10)}</h4>`
});

// Card 4 Projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    let wcard4 = document.getElementById('card4');
    wcard4.innerHTML = `<h3>${data.list[24].main.temp}º F</h3>
                        <h4>${data.list[24].dt_txt.substring(0,10)}</h4>`
});

// Card 5 Projection
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    let wcard5 = document.getElementById('card5');
    wcard5.innerHTML = `<h3>${data.list[32].main.temp}º F</h3>
                        <h4>${data.list[32].dt_txt.substring(0,10)}</h4>`
});

// Setting the variable for Marker + setting the base location for it
const marker = new mapboxgl.Marker().setLngLat([-98.48527,29.423017]).addTo(map).setDraggable(true);

// Functions to Call MAPBOX API to populate information in the cards
map.on('click', (e) => {
    marker.setLngLat(e.lngLat);
    reverseGeocode(marker.getLngLat(), mapToken).then(res => {
        populateCards(res, true);
    });
});
function onDragEnd() {
    reverseGeocode(marker.getLngLat(), mapToken).then(res => {
        populateCards(res, true);
    });
}

marker.on('dragend',onDragEnd);

// TODO: Refactor ideas
// 1. Make the card populations into functions to lessen amount of code.
// 2. Add function to add a image for the skyline weather i.e.: Cloudy, rainy, sunny
// 3. Make the marker change to match the coords from search input
// 4. Mock hamburger nav icon
// 5. Mock footer that credits MAPBOX API & openWeather API
// 6. Clean up code using modules | Import & Export usages
// 7. Refactor style nit-picks