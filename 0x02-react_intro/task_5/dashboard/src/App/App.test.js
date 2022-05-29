import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// const wrapper = shallow(<App />);
describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists);
    });
    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("header.App-header").length).toBe(1);
    });
    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("main.App-body").length).toBe(1);
    });
    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("footer.App-footer").length).toBe(1);
    });
});
