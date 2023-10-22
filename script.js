$(document).ready(function(){

    var myKey = config.MY_Key;

    var baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
    
    


$('#search').click(function(){
    var location = $('#location').val();
    var URL = `${baseURL}q=${location}&APPID=${myKey}`
    // console.log(URL);
    $.ajax({
        url: URL,
        method: 'GET',
        success: function(weather){
            var weatherCondition = "<p>" + "Temperature: " + Math.floor((weather.main["temp"] - 273.15) * 1.8 + 32) + "°f" + "</p>"
            weatherCondition += "<p>" + "Weather: " + weather.weather["0"]["description"] + "</p>"
            weatherCondition += "<p>" + "Humidity: " + weather.main["humidity"] + "%" + "</p>"
            weatherCondition += "<p>" + "Wind Speed: " + weather.wind["speed"] + "m/s" + "</p>"

            
            $("#weather-info").html(weatherCondition);
            
            
            
        }

    });
});

});