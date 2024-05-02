// Importation de PropTypes pour la validation des props
import PropTypes from "prop-types";

// Importation du composant Image depuis le fichier "../Image"
import Image from "../Image";

// Importation de la fonction v4 (pour générer des UUID) depuis la bibliothèque 'uuid'
import { v4 } from 'uuid';

// Création d'un alias pour la fonction v4
const uuidv4 = v4;

// Définition du composant FeatureItem
function FeatureItem({ imageSrc, imageAlt, title, description, dataTestid }) {

    // Rendu du composant FeatureItem
    return (
        <div className="feature-item">
            <Image 
                data-testid={dataTestid}
                key={`Image-item-${uuidv4()}`}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

// Validation des props du composant FeatureItem
FeatureItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    title: PropTypes.node.isRequired,
    dataTestid: PropTypes.string,
};

// Définition des props par défaut du composant FeatureItem
FeatureItem.defaultProps = {
    imageAlt: "image",
    dataTestid: "feature-item-image-testid"
}

// Exportation du composant FeatureItem pour être utilisé dans d'autres parties de l'application
export default FeatureItem;