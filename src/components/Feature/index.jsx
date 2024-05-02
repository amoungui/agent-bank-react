// Importation du composant FeatureItem depuis le fichier "../FeatureItem"
import FeatureItem from "../FeatureItem";

// Importation de la fonction v4 (pour générer des UUID) depuis la bibliothèque 'uuid'
import { v4 } from 'uuid';

// Création d'un alias pour la fonction v4
const uuidv4 = v4;

// Définition du composant Feature
function Feature() {

    // Rendu du composant Feature
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem 
                data-testid="feature-item-1-image-testid"
                key={`Feature-item-1-${uuidv4()}`} 
                imageSrc="/assets/img/icon-chat.webp"
                imageAlt="Chat Icon" 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem 
                data-testid="feature-item-2-image-testid"
                key={`Feature-item-2-${uuidv4()}`} 
                imageSrc="/assets/img/icon-money.webp"
                imageAlt="Chat Icon" 
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem 
                data-testid="feature-item-3-image-testid"
                key={`Feature-item-3-${uuidv4()}`} 
                imageSrc="/assets/img/icon-security.webp"
                imageAlt="Chat Icon" 
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money is always safe."
            />
      </section>
    )
}

// Exportation du composant Feature pour être utilisé dans d'autres parties de l'application
export default Feature;
