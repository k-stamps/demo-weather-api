// API Docs: https://www.weather.gov/documentation/services-web-api
var date;
var apiUrl;

// Fetch weather data and output it to the page
const fetchAPI = function() {
  // Define User-Agent, required by the U.S. Weather Service API
  let headers = new Headers({
    "User-Agent" : "github.com/k-stamps"
  });

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

    document.getElementById("city").textContent = cityName;
    document.getElementById("periodName").textContent = PeriodName.toLowerCase();
    document.getElementById("periodForecast").textContent = PeriodForecast.toLowerCase();
    date = new Date();
    document.getElementById("dateNow").textContent = date;
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

// Define city
var cityName;
var e = document.getElementById("city-select");
function onChange() {
  cityName = e.value;
  changeCity(cityName);
  fetchAPI();
}
e.onchange = onChange;
onChange();

//GRIDPOINTS forecastGridData URL:
function changeCity(cityName) {
  var city;
  switch(cityName) {
    case "New York":
      city = 'OKX/33,36';
      break;
    case "Chicago":
      city = 'LOT/75,72';
      break;
    case "Los Angeles":
      city = 'LOX/148,41';
      break;
  }
  // Define the API URL
  apiUrl = 'https://api.weather.gov/gridpoints/'+city+'/forecast';
}
