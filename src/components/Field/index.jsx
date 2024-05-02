// Importation de PropTypes pour la validation des props
import PropTypes from "prop-types";

// Définition des types de champs
export const FIELD_TYPES = {
  INPUT_TEXT: 1, // Champ de texte
  TEXTAREA: 2, // Zone de texte
  CHECKBOX: 3, // Case à cocher
  PASSWORD: 4 // Champ de mot de passe
};

// Définition du composant Field
const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, id, testId}) => {
  let component;
  // Sélection du composant à afficher en fonction du type de champ
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      // Champ de texte
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
            data-testid= {testId} // "field-testid"
          />          
        </div>
      );
      break;
    case FIELD_TYPES.PASSWORD:
      // Champ de mot de passe
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="password"
            name={name}
            placeholder={placeholder}
            data-testid={testId}
          />            
        </div>
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      // Zone de texte
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <textarea name={name} data-testid={testId} />;
        </div>
      )
      break;
    case FIELD_TYPES.CHECKBOX:
      // Case à cocher
      component = (
        <div>
          <input 
            type="checkbox" 
            id={id} 
            data-testid={testId} 
          />
          <label htmlFor={id}>{label}</label>
        </div>
      );
      break;      
    default:
      // Par défaut, un champ de texte est affiché
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
            data-testid={testId}
          />          
        </div>
      );
  }
  // Rendu du composant sélectionné
  return (
    <div>
      {component}
    </div>
  );
};

// Validation des props du composant Field
Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)), // Le type doit être l'un des types de champs définis
  name: PropTypes.string, // Le nom est une chaîne de caractères
  label: PropTypes.string, // Le label est une chaîne de caractères
  placeholder: PropTypes.string, // Le placeholder est une chaîne de caractères
};

// Définition des props par défaut du composant Field
Field.defaultProps = {
  label: "", // Le label par défaut est une chaîne de caractères vide
  placeholder: "", // Le placeholder par défaut est une chaîne de caractères vide
  type: FIELD_TYPES.INPUT_TEXT, // Le type par défaut est un champ de texte
  name: "field-name", // Le nom par défaut est "field-name"
  testId: "field-testid" // L'ID de test par défaut est "field-testid"
}

// Exportation du composant Field pour être utilisé dans d'autres parties de l'application
export default Field;
