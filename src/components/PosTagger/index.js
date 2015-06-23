/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const posTaggerComponent = React.createClass({
    render: Template,
});

export default posTaggerComponent;