import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists);
    });
    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<Footer />);
        // expect(wrapper.find('.App-footer')).toHaveLength(1);
        expect(wrapper.text().substring(0,9)).toBe('Copyright');
        // to.contain('Copyright');
    });
});
