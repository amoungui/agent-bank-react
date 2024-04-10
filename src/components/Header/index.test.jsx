// Importation des fonctions 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';

// Importation du composant 'Header' depuis le répertoire courant
import Header from "./index";

// Début du bloc describe des tests pour le composant 'Header'
describe("When a Header component is created", () => {
    // Test spécifique pour vérifier que le logo du header est affiché
    it("an image is display with alt value",  () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        
        // Récupération de l'élément image par son testId
        const imageElement = screen.getByTestId("header-image-testid");

        // Vérification que l'élément image est présent dans le document
        expect(imageElement).toBeInTheDocument();

        // Vérification que l'attribut alt de l'élément image est égal à "image-alt-text"
        expect(imageElement.alt).toEqual("Argent Bank Logo");        
    });
    
    it("Check signin link", () => { 
        // vérifier le lien Sign In au clik
    });
});
