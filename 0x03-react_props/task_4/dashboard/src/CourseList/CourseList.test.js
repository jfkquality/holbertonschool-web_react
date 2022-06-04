import CourseList from './CourseList';
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

// configure({adapter: new Adapter()});
const wrapper = shallow(<CourseList />);
describe('CourseList', () => {
    it('renders without crashing', () => {
        expect(wrapper.exists());
    });

    it('should render 5 CourseListRows', () => {
        const rows = wrapper.find(CourseListRow)
        expect(rows.length).toBe(5);
    });
});
