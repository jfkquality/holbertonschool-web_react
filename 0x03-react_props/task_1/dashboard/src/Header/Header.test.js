import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    const wrapper = shallow(<Header />);
    it('renders without crashing', () => {
        expect(wrapper.exists);
    });
    it("Verify that the components render img tags", () => {
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
});
