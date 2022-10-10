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

    // update forecast for day zero
    var forecast = data.forecast.forecastday[0];
    // date
    var fdate = forecast.date;
    $('#divDate0').html(fdate);
    // icon
    var condition = forecast.day.condition.icon;
    $('#spanIcon0').attr('src', condition);
    // temp
    var temp = forecast.day.avgtemp_c;
    $('#spanTemp0').html(temp);
    // wind maxwind_mph
    var wind = forecast.day.maxwind_mph;
    $('#spanWind0').html(wind);
    // update Humidity
    var humidity = forecast.day.avghumidity;
    $('#spanHumidity0').html(humidity);

    // update forecast for day one
    var forecast = data.forecast.forecastday[1];
    // date
    var fdate = forecast.date;
    $('#divDate1').html(fdate);
    // icon
    var condition = forecast.day.condition.icon;
    $('#spanIcon1').attr('src', condition);
    // temp
    var temp = forecast.day.avgtemp_c;
    $('#spanTemp1').html(temp);
    // wind maxwind_mph
    var wind = forecast.day.maxwind_mph;
    $('#spanWind1').html(wind);
    // update Humidity
    var humidity = forecast.day.avghumidity;
    $('#spanHumidity1').html(humidity);

    // update forecast for day two
    var forecast = data.forecast.forecastday[2];
    // date
    var fdate = forecast.date;
    $('#divDate2').html(fdate);
    // icon
    var condition = forecast.day.condition.icon;
    $('#spanIcon2').attr('src', condition);
    // temp
    var temp = forecast.day.avgtemp_c;
    $('#spanTemp2').html(temp);
    // wind maxwind_mph
    var wind = forecast.day.maxwind_mph;
    $('#spanWind2').html(wind);
    // update Humidity
    var humidity = forecast.day.avghumidity;
    $('#spanHumidity2').html(humidity);

    // update forecast for day three
    var forecast = data.forecast.forecastday[3];
    // date
    var fdate = forecast.date;
    $('#divDate3').html(fdate);
    // icon
    var condition = forecast.day.condition.icon;
    $('#spanIcon3').attr('src', condition);
    // temp
    var temp = forecast.day.avgtemp_c;
    $('#spanTemp3').html(temp);
    // wind maxwind_mph
    var wind = forecast.day.maxwind_mph;
    $('#spanWind3').html(wind);
    // update Humidity
    var humidity = forecast.day.avghumidity;
    $('#spanHumidity3').html(humidity);

    // update forecast for day four
    var forecast = data.forecast.forecastday[4];
    // date
    var fdate = forecast.date;
    $('#divDate4').html(fdate);
    // icon
    var condition = forecast.day.condition.icon;
    $('#spanIcon4').attr('src', condition);
    // temp
    var temp = forecast.day.avgtemp_c;
    $('#spanTemp4').html(temp);
    // wind maxwind_mph
    var wind = forecast.day.maxwind_mph;
    $('#spanWind4').html(wind);
    // update Humidity
    var humidity = forecast.day.avghumidity;
    $('#spanHumidity4').html(humidity);
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