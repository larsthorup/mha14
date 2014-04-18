Weather = {};

Weather.fetch = function (location) {
    return $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        data: { q: location },
        dataType: 'jsonp'
    }).then(function (rawData) {
        return {
            text: rawData.weather[0].description
        };
    });
};

Weather.render = function (context, data) {
    $('<p></p>').appendTo(context).text(data.text);
};