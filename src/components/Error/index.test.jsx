import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Error from './index';

test('renders Error component correctly', () => {
    render(
        <Router>
            <Error />
        </Router>
    );

    const errorInfo = screen.getByText('404');
    expect(errorInfo).toBeInTheDocument();

    const errorMsg = screen.getByText('Oups! La page que vous demandez n\'existe pas.');
    expect(errorMsg).toBeInTheDocument();

    const linkElement = screen.getByText('Retourner sur la page d’accueil');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});
