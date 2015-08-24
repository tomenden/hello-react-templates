define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';


    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                height: 50,
                padding: 50
            };
        },
        getProps: function () {
            return {
                style: {
                    backgroundColor: 'pink',
                    height: this.state.height + 'px',
                    padding: this.state.padding + 'px 0'
                }
            };
        },
        displayName: 'Hello',
        render: template
    });
});
