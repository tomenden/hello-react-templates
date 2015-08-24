define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                fields: [],
                newField: ''
            };
        },
        addField: function () {
            var newState = _.cloneDeep(this.state);
            newState.fields.push(this.state.newField);
            newState.newField = '';
            this.setState(newState);
        },
        logChange: function (event) {
            window.console.log(event.target.value);
        },
        displayName: 'Hello',
        render: template
    });
});
