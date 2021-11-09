import { render, screen, act } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ icon_url: 'http://image.png', value: 'Joke text' })
}));

describe('counter testing', () => {
  test('check loading of api on mount', async () => {
    await act(async () => render(<App />));
    expect(screen.getByText('Joke text')).toBeInTheDocument();
  });
});