/** API Key: 26e3f2dc4537aa5b88bdfac2804ee9b3 */
window.onload = function() {
    document.getElementById("weatherSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "")
        return;
        console.log(value);
        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=26e3f2dc4537aa5b88bdfac2804ee9b3";
        fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {	
            console.log(json);
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1)
            results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
            });
        /** Forecast Results */
        const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=26e3f2dc4537aa5b88bdfac2804ee9b3";
        fetch(url2)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log(json);
            let forecast = "";
            for (let i=0; i < json.list.length; i++) {
            forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
            forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
            forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
            }
            document.getElementById("forecastResults").innerHTML = forecast;
            });
    });
}













/*


window.onload = function() {
    document.getElementById("weatherSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "")
        return;
        console.log(value);
    });

    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial"
         + "&APPID=26e3f2dc4537aa5b88bdfac2804ee9b3";
    try {
        // trying to do something that might fail
        const response = await fetch(url);
        //console.log("response: ", response);
        const json = await response.json();
        //console.log("json: ", json);
        let results = "";
        results += '<h2>Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1)
            results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        }
    catch(err) { // catching the error
        console.log(err);
    }
}
        /*
    fetch(url)
        .then(function(response) {
        return response.json();
        }).then(function(json) {	
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
            results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        });
        */



/*
window.onload = function() {}

const url = "website" + cityname + restOfWebsite + APIkeyThing;

fetch(url)
    .then (function(response))
    */