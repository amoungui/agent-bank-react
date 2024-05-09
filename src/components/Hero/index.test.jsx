// Importation des fonctions 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { render, screen } from "@testing-library/react";

// Importation du composant 'Hero' depuis le répertoire courant
import Hero from "./Hero";

import backgroundImage from '../../assets/img/bank-tree.webp';

// Début du bloc describe des tests pour le composant 'Hero'
describe("When a Hero component is created", () => {
    // Test spécifique pour vérifier qu'une image est affichée avec une valeur alt
    it("renders with background image", () => {
        // Rendu de la carte de service avec une source d'image, une valeur alt et un enfant spécifiques
        render(
            <Hero />
        );

        const heroElement = screen.getByTestId('hero-image-testid');

        expect(heroElement).toHaveStyle(`backgroundImage: url(${backgroundImage})`);
    });

    it("Verify if card text is diplay",  () =>{
        render(
            <Hero />
        )
        const subtitle1 = screen.getByText(/No fees./);
        const subtitle2 =screen.getByText(/No minimum deposit./);

        // Vérification que les éléments sont présents dans le document
        expect(subtitle1).toBeInTheDocument();
        expect(subtitle2).toBeInTheDocument();        
    });
});