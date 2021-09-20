import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('counter testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders tht title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app');
  });

  test('render a button with text of increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('render initial value of counter', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });

  test('Increment counter and render value of counter', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });

  test('Increment & then decrement counter and render value of counter', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });

  test('Negate value validation on decrement', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});