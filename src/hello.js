define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    var classes = ['large', 'small', 'huge', 'x-small', 'italic', 'bold'];

    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                currentClassIndex: 0
            };
        },
        componentDidUpdate: function () {
            this.refs.text.getDOMNode().className = classes[this.state.currentClassIndex];
        },
        lowerClass: function () {
            var newClassIndex = this.state.currentClassIndex === 0 ?
            classes.length - 1 :
            this.state.currentClassIndex - 1;
            this.setState({currentClassIndex: newClassIndex});
        },
        higherClass: function () {
            var newClassIndex = this.state.currentClassIndex === classes.length - 1 ?
                0 :
            this.state.currentClassIndex + 1;
            this.setState({currentClassIndex: newClassIndex});
        },
        displayName: 'Hello',
        render: template
    });
});
