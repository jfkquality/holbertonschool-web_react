import Notifications from './Notifications';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});

describe('<Notifications />', () => {
    const wrapper = shallow(<Notifications />);
    it('renders without crashing', () => {
        expect(wrapper.exists());
    });
    it('should render 3 <li> as <NotificationItem>', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('NotificationItem').length).toEqual(3);
    });
    it('renders first <li>, correct text, menu item when displayDrawer true ', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('NotificationItem').first().props().value).toEqual('New course available');
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
        expect(wrapper.find('.menuItem').length).toEqual(1);
    });
    it('renders menu item, not .Notiifications when displayDrawer false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').length).toEqual(1);
        expect(wrapper.find('.Notifications').length).toEqual(0);
    });
});
