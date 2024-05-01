import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import SignIn from './index';

// Importation de jest-fetch-mock
import fetchMock from 'jest-fetch-mock';

// Utilisation de jest-fetch-mock à la place de fetch
global.fetch = fetchMock;

describe('SignIn Component', () => {
  beforeEach(() => {
    // Réinitialisation des moqueries avant chaque test
    fetchMock.resetMocks();
  });

  test('should submit the form', () => {
    // Mise en place de la moquerie pour l'appel de connexion
    fetchMock.mockResponseOnce(JSON.stringify({ body: { token: 'fake-token' } }));

    render(
      <Provider store={store}>
        <Router>
          <SignIn />
        </Router>
      </Provider>
    );

    fireEvent.input(screen.getByTestId('username'), { target: { value: 'test@test.com' } });
    fireEvent.input(screen.getByTestId('password'), { target: { value: 'password' } });
    fireEvent.submit(screen.getByTestId('form'));

    // Vérification que fetch a été appelé avec les bonnes données
    expect(fetchMock.mock.calls[0][0]).toEqual('http://localhost:3001/api/v1/user/login');
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: 'test@test.com', password: 'password' }),
    });
  });
});
