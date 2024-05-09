// Importation des fonctions nécessaires de la bibliothèque de test
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// Importation du composant Router de react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
// Importation du composant Provider de react-redux
import { Provider } from 'react-redux';
// Importation du store Redux
import store from '../../app/store';
// Importation du composant SignIn
import SignIn from './SignIn';
// Importation de la bibliothèque nock pour simuler des requêtes HTTP
import nock from 'nock';

// Début de la suite de tests pour le composant SignIn
describe('SignIn Component', () => {
  // Test pour vérifier la soumission du formulaire
  test('should submit the form', async () => { // Notez l'utilisation de async ici
    // Configuration de nock pour intercepter une requête POST vers '/api/v1/user/login'
    nock('http://localhost:3001')
      .post('/api/v1/user/login')
      .reply(200, { body: { token: 'fake-token' } });

    // Rendu du composant SignIn à tester, enveloppé dans les composants Provider et Router
    render(
      <Provider store={store}>
        <Router>
          <SignIn />
        </Router>
      </Provider>
    );

    // Simulation de l'entrée de l'utilisateur dans le champ 'username'
    fireEvent.input(screen.getByTestId('username'), { target: { value: 'steve@rogers.com' } });
    // Simulation de l'entrée de l'utilisateur dans le champ 'password'
    fireEvent.input(screen.getByTestId('password'), { target: { value: 'password456' } });
    // Simulation de la soumission du formulaire
    fireEvent.submit(screen.getByTestId('form'));

    // Utilisation de waitFor pour attendre que l'appel réseau soit terminé
    await waitFor(() => expect(nock.isDone()).toBeTruthy());
  });
});
