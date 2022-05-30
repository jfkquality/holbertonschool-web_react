import NotificationItem from './NotificationItem';
// import { getLatestNotification } from '../utils/utils';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        expect(shallow(<NotificationItem />).exists);
    });
    it('should render 3 html', () => {
        const wrapper = shallow(<NotificationItem props />);
        wrapper.setProps({ type: 'bye', value: 'hello' });
        expect(wrapper.find('li').text()).toEqual('hello');
    });
    it('should render set html', () => {
        const wrapper = shallow(<NotificationItem html={"<h1>hello again</h1>"} />);
        const { dangerouslySetInnerHTML: { __html } } = wrapper.props();
        expect(__html).toEqual('<h1>hello again</h1>');
    });
});
