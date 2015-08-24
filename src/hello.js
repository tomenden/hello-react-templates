define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    var countries = {
        Israel: [
            'Tel Aviv',
            'Haifa',
            'Raanana'
        ],
        'United States': [
            'Manhattan',
            'Boston'
        ]
    };

    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getCountries: function () {
            return _.keys(countries);
        },
        getCities: function () {
            var selectedCountry = this.state.selectedCountry;
            return selectedCountry ?
                countries[selectedCountry] :
                '';
        },
        getInitialState: function () {
            return {
                selectedCountry: null,
                selectedCity: null
            };
        },
        displayName: 'Hello',
        render: template
    });
});
