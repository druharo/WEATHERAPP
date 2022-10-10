
var weatherApiKey = "80ca409d1e8c4b329ee163000220910";

var weatherApi = "http://api.weatherapi.com/v1/forecast.json";

function updateDivs(data) {
    console.log(data);

    // update spanCity
    var cityName = data.location.name;
    $('#spanCity').html(cityName);

    // update spanLocalTime
    var localTime = data.location.localtime;
    $('#spanLocaltime').html(localTime);

    // update Condition icon
    var currentCondition = data.current.condition.icon;
    $('#spanIcon').attr('src', currentCondition);

    // update Temp
    var temp = data.current.temp_c;
    $('#spanTemp').html(temp);

    // update spanWind
    var wind_mph = data.current.wind_mph;
    $('#spanWind').html(wind_mph);

    // update spanHumidity
    var humidity = data.current.humidity;
    $('#spanHumidity').html(humidity);

}

function handleSearchClick(event) {
    event.preventDefault();

    var city = $('#inputCity').val();

    // parameters used by the Call API
    var params = {
        key: weatherApiKey,
        q: city,
        days: 5,
        aqi: "no",
        alerts: "no"
    };
    $.getJSON(weatherApi, params, updateDivs);
}

$(document).ready(function () {
    $('#btnSearch').on('click', handleSearchClick);

    $('#btnCityAtlanta').on('click', function () {
        $('#inputCity').val('Atlanta');
        $('#btnSearch').click();
    });
    $('#btnCityDenver').on('click', function () {
        $('#inputCity').val('Denver');
        $('#btnSearch').click();
    });
    $('#btnCitySeattle').on('click', function () {
        $('#inputCity').val('Seattle');
        $('#btnSearch').click();
    });
    $('#btnCitySanFrancisco').on('click', function () {
        $('#inputCity').val('San Francisco');
        $('#btnSearch').click();
    });
    $('#btnCityOrlando').on('click', function () {
        $('#inputCity').val('Orlando');
        $('#btnSearch').click();
    });
    $('#btnCityNewYork').on('click', function () {
        $('#inputCity').val('New York');
        $('#btnSearch').click();
    });
    $('#btnCityChicago').on('click', function () {
        $('#inputCity').val('Chicago');
        $('#btnSearch').click();
    });
    $('#btnCityAustin').on('click', function () {
        $('#inputCity').val('Austin');
        $('#btnSearch').click();
    });

});