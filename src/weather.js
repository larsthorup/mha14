Weather = {};

Weather.render = function (context, data) {
    $('<p></p>').appendTo(context).text(data.text);
};