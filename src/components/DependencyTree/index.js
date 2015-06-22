/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const DependencyTreeComponent = React.createClass({
    getInitialState: function() {
        return {data: ''};
    },
    componentWillReceiveProps: function(newProps) {
        var treeFull = newProps.data.tree_full;
        this.setState({data: treeFull});
    },
    render: Template,
});

export default DependencyTreeComponent;
