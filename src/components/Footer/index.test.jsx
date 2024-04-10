// Importation des fonctions 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { render, screen } from "@testing-library/react";

// Importation du composant 'Footer' depuis le répertoire courant
import Footer from "./index";

// Début du bloc describe des tests pour le composant 'Footer'
describe("When a Footer component is created", () => {
    // Test spécifique pour vérifier que le copyrigth est affiché
    it("Verify if copyright text is diplay",  () =>{
        render(
            <Footer />
        )
        const copyright = screen.getByText(/Copyright 2020 Argent Bank/);

        // Vérification que les éléments sont présents dans le document
        expect(copyright).toBeInTheDocument();    
    });
});