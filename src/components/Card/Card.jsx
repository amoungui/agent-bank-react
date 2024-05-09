// Importation du composant Button depuis le fichier "../Button"
import Button from "../Button/Button";

// Définition du composant Card
const Card = ({ accountTitle, accountAmount, accountAmountDescription }) => {
  // Rendu du composant Card
  return (
    // Début de la section du compte
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{accountAmountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button" title="View transactions" />
      </div>
    </section> // Fin de la section du compte
  );
}

// Exportation du composant Card pour être utilisé dans d'autres parties de l'application
export default Card;