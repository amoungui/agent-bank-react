import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Profil from './index';
import nock from 'nock';

describe('Profil Component', () => {
  test('should submit the form', async () => { // Notez l'utilisation de async ici
    nock('http://localhost:3001')
      .post('/api/v1/user/profile')
      .reply(200, { body: { token: 'fake-token' } });

    render(
      <Provider store={store}>
        <Router>
          <Profil />
        </Router>
      </Provider>
    );

    fireEvent.input(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.submit(screen.getByTestId('form'));

  });
});
