Weather = {};

Weather.listen = function (context) {
    context.find('#city').on('change', function () {
        var $input = $(this);
        var location = $input.val();
        Weather.fetch(location).then(function (data) {
            Weather.render(context, data);
        })
    });
}

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