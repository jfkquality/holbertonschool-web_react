import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'

// const wrapper = shallow(<App />);
describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders without crashing', () => {
        expect(wrapper.exists);
        expect(wrapper.find(CourseList)).not.exists;
    });
    // verify that App renders a div with the class App-header
    it("Notifs", () => {
        expect(wrapper.find(<Notifications />)).exists;
    });
    it("Head", () => {
        expect(wrapper.find(<Header />)).exists;
    });
    it("Log", () => {
        expect(wrapper.find(<Login />)).exists;
    });
    it("Foot", () => {
        expect(wrapper.find(<Footer />)).exists;
    });
    it('renders Login, not CourseList when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList)).exists;
        expect(wrapper.find(Login)).not.exists;
    });

    // Another way KCastro
    // it("Notifications", () => {
    //     shallow(<Notifications />);
    // });
    // it("Header", () => {
    //     shallow(<Header />);
    // });
    // // verify that App renders a div with the class App-body
    // it("Login", () => {
    //     shallow(<Login />);
    // });
    // // verify that App renders a div with the class App-footer
    // it("Footer", () => {
    //     shallow(<Footer />);
    // });
});
