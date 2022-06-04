import CourseListRow from './CourseListRow';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
describe('CourseListRow', () => {
    // const wrapper = shallow(<CourseListRow propps />); //HOW TO PASS REQUIRED PROPS THIS WAY?
    const wrapper = shallow(<CourseListRow textFirstCell="test0" />);
    it('renders without crashing', () => {
        // const wrapper = shallow(<CourseListRow textFirstCell="test0" />);
        // wrapper.setProps({ textFirstCell: "Hello" })
        expect(wrapper.exists());
    });
    it('should render 1 <th> with colspan="2"', () => {
        wrapper.setProps({
            isHeader: true,
            textFirstCell: 'th 1 of 1'
        });
        const hcell = wrapper.find('th')
        expect(hcell.length).toBe(1);
        expect(hcell.prop('colSpan')).toEqual('2');
        expect(hcell.text()).toEqual('th 1 of 1');
    });
    it('should render 2 <th>', () => {
        wrapper.setProps({
            isHeader: true,
            textFirstCell: 'th 1 of 2',
            textSecondCell: 'th 2 of 2'
        });
        const hcells = wrapper.find('th')
        expect(hcells.length).toBe(2);
        expect(hcells.at(0).text()).toEqual('th 1 of 2');
        expect(hcells.at(1).text()).toEqual('th 2 of 2');
    });
    it('should render 2 <td>', () => {
        wrapper.setProps({
            isHeader: false,
            textFirstCell: 'td 1 of 2',
            textSecondCell: 'td 2 of 2'
        });
        const cells = wrapper.find('td')
        expect(cells.length).toBe(2);
        expect(cells.at(0).text()).toEqual('td 1 of 2');
        expect(cells.at(1).text()).toEqual('td 2 of 2');
    });
});
