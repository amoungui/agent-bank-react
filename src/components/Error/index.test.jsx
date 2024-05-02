// Importation des fonctions render et screen depuis la bibliothèque de test '@testing-library/react'
import { render, screen } from '@testing-library/react';

// Importation du composant Router depuis la bibliothèque 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

// Importation du composant Error depuis le fichier './index'
import Error from './index';

// Définition du test 'renders Error component correctly'
test('renders Error component correctly', () => {
    // Rendu du composant Error à l'intérieur du composant Router
    render(
        <Router>
            <Error />
        </Router>
    );

    // Recherche du texte '404' dans le document
    const errorInfo = screen.getByText('404');
    // Vérification que le texte '404' est présent dans le document
    expect(errorInfo).toBeInTheDocument();

    // Recherche du message d'erreur dans le document
    const errorMsg = screen.getByText('Oups! La page que vous demandez n\'existe pas.');
    // Vérification que le message d'erreur est présent dans le document
    expect(errorMsg).toBeInTheDocument();

    // Recherche du lien 'Retourner sur la page d’accueil' dans le document
    const linkElement = screen.getByText('Retourner sur la page d’accueil');
    // Vérification que le lien est présent dans le document
    expect(linkElement).toBeInTheDocument();
    // Vérification que l'attribut 'href' du lien est '/'
    expect(linkElement.getAttribute('href')).toBe('/');
});