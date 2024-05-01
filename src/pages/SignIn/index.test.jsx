import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import SignIn from './index';
import nock from 'nock';

describe('SignIn Component', () => {
  test('should submit the form', async () => { // Notez l'utilisation de async ici
    nock('http://localhost:3001')
      .post('/api/v1/user/login')
      .reply(200, { body: { token: 'fake-token' } });

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

    // Utilisez waitFor pour attendre que l'appel réseau soit terminé
    await waitFor(() => expect(nock.isDone()).toBeTruthy());
  });
});
