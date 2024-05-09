// Importation des fonctions nécessaires de la bibliothèque de test
import { render, fireEvent, screen } from '@testing-library/react';
// Importation du composant Router de react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
// Importation du composant Provider de react-redux
import { Provider } from 'react-redux';
// Importation du store Redux
import store from '../../app/store';
// Importation du composant Profil
import Profil from './Profil';
// Importation de la bibliothèque nock pour simuler des requêtes HTTP
import nock from 'nock';

// Début de la suite de tests pour le composant Profil
describe('Profil Component', () => {
  // Test pour vérifier la soumission du formulaire
  test('should submit the form', async () => {
    // Configuration de nock pour intercepter une requête POST vers '/api/v1/user/profile'
    nock('http://localhost:3001')
      .post('/api/v1/user/profile')
      .reply(200, { body: { token: 'fake-token' } });

    // Rendu du composant Profil à tester, enveloppé dans les composants Provider et Router
    render(
      <Provider store={store}>
        <Router>
          <Profil />
        </Router>
      </Provider>
    );

    // Simulation de l'entrée de l'utilisateur dans le champ 'Username'
    fireEvent.input(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    // Simulation de la soumission du formulaire
    fireEvent.submit(screen.getByTestId('form'));

  });
});
