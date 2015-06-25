/*

*/
/* global describe, it */
// import helpers
import should from 'turris-test-helpers';

// import page
import Component from '../src/components/resultPanel/index.js';

describe('ResultPanel component suite', function() {
    it('Should render', function() {
        const React = this.React;
        const TestUtils = this.TestUtils;

        // render
        const comp = TestUtils.renderIntoDocument(
            <Component />,
            this.container
        );

        // check if link and name are correct
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'div');
        should(divs.length).equal(1);
    });
});
