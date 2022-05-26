import { shallow, mount, render } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);
describe('<Notifications />', () => {
    it('renders without crashing', () => {
        // shallow(<Notifications />);
        expect(wrapper.exists);
    });
    it('should render 3 <li>', () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it('should render correct text', () => {
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
});
