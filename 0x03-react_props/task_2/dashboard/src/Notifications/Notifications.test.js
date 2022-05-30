import Notifications from './Notifications';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});

describe('<Notifications />', () => {
    const wrapper = shallow(<Notifications />);
    it('renders without crashing', () => {
        expect(wrapper.exists());
    });
    it('should render 3 <li> as <NotificationItem>', () => {
        expect(wrapper.find('NotificationItem').length).toEqual(3);
    });
    it('should render correct text', () => {
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
    it('should render first <li> ', () => {
        expect(wrapper.find('NotificationItem').first().props().value).toEqual('New course available');
    });
});
