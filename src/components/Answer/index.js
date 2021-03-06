/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const AnswerComponent = React.createClass({
    getInitialState: function() {
        return {data: {
        }};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            data: newProps.data,
        });
    },
    render: Template,
});

export default AnswerComponent;
