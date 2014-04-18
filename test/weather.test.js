describe('weather', function () {

    it('fetches', function (done) {
        // given
        $.mockjax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            data: {q: 'Denver'},
            dataType: 'jsonp',
            responseText: {
                weather: [
                    {
                        description: 'rainy'
                    }
                ]
            }
        });

        // when
        var fetching = Weather.fetch('Denver');

        // then
        fetching.then(function (data) {
            expect(data.text).toBe('rainy');
            done();
        });
    });

    it('renders', function () {
        // given
        var context = $('<div></div>');
        var weatherData = {
            text: 'snowy'
        };

        // when
        Weather.render(context, weatherData);

        // then
        expect(context.find('p').text()).toBe('snowy');
    })

})