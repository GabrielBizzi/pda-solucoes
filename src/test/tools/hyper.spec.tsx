import renderer from 'react-test-renderer';
import HyperLink from '../../HyperLink';
import React from 'react';

test('Link test with image hover', () => {
    const component = renderer.create(
        <HyperLink title="Link" type="link" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})