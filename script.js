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
            document.getElementById("weatherResults").style.padding = ".5em";
            let results = "";
            results += "<div id=\"WR\">"
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
            results += "</div>"
            document.getElementById("weatherResults").innerHTML = results;
            });
        /** Forecast Results */
        const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=26e3f2dc4537aa5b88bdfac2804ee9b3";
        fetch(url2)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log(json);
            document.getElementById("forecastResults").style.padding = ".1em";
            document.getElementById("forecastResults").style.textAlign = "center";
            document.getElementById("forecastHead").innerHTML = "5 day / 3 hour forecast for " + value + ":";
            document.getElementById("forecastHead").style.padding = "1em";
            let forecast = "";
            for (let i=0; i < json.list.length; i++) {
                forecast += "<div id=\"fiveDay\">";
                forecast += "<h4>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY <br> h:mm a') + "</h4>";
                forecast += "<p id =\"temper\">" + json.list[i].main.temp + "°F</p>";
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/ height=\"25%\">';
                forecast += "</div>";
            }
            document.getElementById("forecastResults").innerHTML = forecast;
            });
    });
}