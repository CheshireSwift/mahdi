import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as selectorMatchers from 'jest-enzyme-selector-matchers';

configure({ adapter: new Adapter() });

expect.extend(selectorMatchers);
