// Importation de la fonction useNavigate depuis la bibliothèque react-router-dom
import { useNavigate } from 'react-router-dom';

// Importation de PropTypes pour la validation des props
import PropTypes from "prop-types";

// Définition du composant Button
function Button({title, className, path}) {
    // Utilisation du hook useNavigate pour naviguer entre les routes
    const navigate = useNavigate();
    
    // Définition de la fonction handleClick qui navigue vers le chemin spécifié
    const handleClick = () => {
        navigate(path);  
    }

    // Rendu du bouton avec le titre, la classe et la fonction onClick
    return (
        <button className={className} onClick={handleClick}>{title}</button>
    )
}

// Validation des props du composant Button
Button.propTypes = {
	title: PropTypes.string.isRequired, // Le titre est requis et doit être une chaîne de caractères
	className: PropTypes.node.isRequired, // La classe est requise
	path: PropTypes.node.isRequired, // Le chemin est requis
};

// Définition des props par défaut du composant Button
Button.defaultProps = {
	title: "title", // Le titre par défaut est "title"
    className: "edit-button", // La classe par défaut est "edit-button"
	path: "/profil" // Le chemin par défaut est "/profil"
}

// Exportation du composant Button pour être utilisé dans d'autres parties de l'application
export default Button;
