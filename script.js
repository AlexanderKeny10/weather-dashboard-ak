// Global variable 
var cityList = [];
var cityName;

// local storage functions
storedCityList();
storedWeather();

// Displays the city entered by the user.
function renderCities(){
    $("#cityList").empty();
    $("#cityInput").val("");
    
    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary city");
        a.attr("data-name", cityList[i]);
        a.text(cityList[i]);
        $("#cityList").prepend(a);
    } 
}

// Pulls the city lists from local storage
function storedCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    
    if (storedCities !== null) {
        cityList = storedCities;
    }
    
    renderCities();
    }

// Searches added to local storage and display searches. 
function storedWeather() {
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

    if (storedWeather !== null) {
        cityName = storedWeather;

        displayWeather();
        displayFiveDayForecast();
    }
}
// Saves the city array to local storage
function storeCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
    }
// Saves the currently display city to local storage
function storeCurrentCity() {

    localStorage.setItem("currentCity", JSON.stringify(cityName));
}