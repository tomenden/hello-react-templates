define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                location: {
                    long: 0,
                    lat: 1
                }
            };
        },
        handleChange: function (locationToChange, newValue) {
            var newState = _.cloneDeep(this.state);
            newState.location[locationToChange] = newValue;
            this.setState(newState);
        },
        getValueLink: function(type) {
            return {
                value: this.state.location[type],
                requestChange: this.handleChange.bind(this, type)
            };
        },
        displayName: 'Hello',
        render: template
    });
});
