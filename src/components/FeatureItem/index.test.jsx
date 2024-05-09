// Importation des fonctions 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { render, screen } from "@testing-library/react";

// Importation du composant 'FeatureItem' depuis le répertoire courant
import FeatureItem from "./FeatureItem";
// eslint-disable-next-line import/order
import { v4 } from 'uuid';

const uuidv4 = v4;

// Début du bloc describe des tests pour le composant 'FeatureItem'
describe("When a Header component is created", () => {
    // Test spécifique pour vérifier que le logo du FeatureItem est affiché
    it("an image is display with alt value",  () => {
        render(
            <FeatureItem 
                key={`Feature-item-1-${uuidv4()}`} 
                imageSrc="/assets/img/icon-chat.png"
                imageAlt="Chat Icon" 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
        )
        
        // Récupération de l'élément image par son testId
        const imageElement = screen.getByTestId("feature-item-image-testid");

        // Vérification que l'élément image est présent dans le document
        expect(imageElement).toBeInTheDocument();

        // Vérification que l'attribut alt de l'élément image est égal à "image-alt-text"
        expect(imageElement.alt).toEqual("Chat Icon");        
    });

    // Test spécifique pour vérifier que le lien 'Sign In' est cliquable
    it("verify if text of feature item is display", () => { 
        render(
            <FeatureItem 
                key={`Feature-item-1-${uuidv4()}`} 
                imageSrc="/assets/img/icon-chat.png"
                imageAlt="Chat Icon" 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
        )
        const title = screen.getByText(/You are our #1 priority/);
        const description = screen.getByText(/You are our #1 priority/);

        // Vérification que les éléments sont présents dans le document
        expect(title).toBeInTheDocument();  
        expect(description).toBeInTheDocument() 
    });
});
