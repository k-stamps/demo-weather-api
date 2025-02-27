// API Docs: https://www.weather.gov/documentation/services-web-api

/* COORDINATES and POINTS URLs:
New York City:
var latitude = 40.7128;
var longitude = 74.0060;
https://api.weather.gov/points/40.7455,-73.9958
*/
//Chicago:
//var latitude = 41.8588;
//var longitude = -87.6619;
// https://api.weather.gov/points/41.8588,-87.6619
// Los Angeles:
/*
var latitude = 33.9415;
var longitude = -118.4059;
https://api.weather.gov/points/33.9415,-118.4059
*/

//GRIDPOINTS forecastGridData URL:
var newYorkCity = 'OKX/33,36';
var chicago = 'LOT/75,72';
var losAngeles = 'LOX/148,41';

// Define city
var city = "Chicago";

// Define the API URL
const apiUrl = 'https://api.weather.gov/gridpoints/'+chicago+'/forecast';
///const apiUrl = 'https://api.weather.gov/points/'+latitude+','+longitude;

console.log(apiUrl);
// Define User-Agent, required by the U.S. Weather Service API
let headers = new Headers({
    "User-Agent" : "github.com/k-stamps"
});

// Make a GET request
fetch(apiUrl, {
    method  : 'GET', 
    headers : headers
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Display data in an HTML element
    var PeriodName = data["properties"]["periods"][0]["name"]
    var PeriodForecast = data["properties"]["periods"][0]["detailedForecast"]

    document.getElementById("city").textContent = city;
    document.getElementById("periodName").textContent = PeriodName.toLowerCase();
    document.getElementById("periodForecast").textContent = PeriodForecast.toLowerCase();
    //document.body.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  var date = new Date();
  document.getElementById("dateNow").textContent = date;

// Simple JSON example
// const jsonS = '{"name":"Sarah","hobbies":["Sports","Reading"]}';
// const formatted = JSON.stringify(JSON.parse(jsonS), null, 2);
// document.body.innerHTML = `<pre>${formatted}</pre>`;