// Add console.log to check to see if our code is working.
console.log("working");


//var myMap = L.map("map", {center: [40.7, -94.5],zoom: 4});

// Create the map object with a center and zoom level.
let myMap = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with a center and zoom level, same as above except via modifying individual attributes

// Referencing cities array
let cityData = cities;

//Loop through cities array and create markers for each city

//cityData.forEach(function(city) {
//    console.log(city)
//    L.circleMarker(city.location, {
//        radius: city.population/100000
//    })
//    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(myMap);
//});


// adding line to map
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

L.polyline(line, {
    color: 'yellow'
}).addTo(myMap)

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(myMap);