describe('weather', function () {

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