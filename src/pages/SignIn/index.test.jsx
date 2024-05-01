import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import SignIn from './index';

describe('SignIn Component', () => {
  test('should render the form', () => {
    render(
      <Provider store={store}>
        <Router>
          <SignIn />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  test('should submit the form', () => {
    render(
      <Provider store={store}>
        <Router>
          <SignIn />
        </Router>
      </Provider>
    );

    fireEvent.input(screen.getByTestId('username'), { target: { value: 'steve@rogers.com' } });
    fireEvent.input(screen.getByTestId('password'), { target: { value: 'password456' } });
    fireEvent.submit(screen.getByTestId('form'));
  });
});
