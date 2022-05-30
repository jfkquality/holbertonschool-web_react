import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
    const wrapper = shallow(<Login />);
    it('renders without crashing', () => {
        expect(wrapper.exists);
    });
    it("Verify that the components renders 2 input tags and 2 label tags", () => {
        expect(wrapper.find('label').length).toEqual(2);
        expect(wrapper.find('input').length).toEqual(2);
    });
});
