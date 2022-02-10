import { shallow, mount, render } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
describe('<App />', () => {
    it('renders without crashing', () => {
        // shallow(<App />);
        expect(wrapper.exists);
    });
    it('renders a div with the class App-header', () => {
        expect(wrapper.find("div.App-header").length).toBe(1);
    });
    it('renders a div with the class App-body', () => {
        expect(wrapper.find("div.App-body").length).toBe(1);
    });
    it('renders a div with the class App-footer', () => {
        expect(wrapper.find("div.App-footer").length).toBe(1);
    });
});
