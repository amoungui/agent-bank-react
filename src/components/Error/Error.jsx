// Importation du composant Link depuis la bibliothèque react-router-dom
import { Link } from 'react-router-dom'

// Définition du composant Error
const Error = () => {
    // Rendu du composant Error
    return (
        // Début du contenu principal
        <main className="main bg-dark">
            <section className="sign-in-content">
                <span className="noexist-page-info">404</span>
                <p className="noexist-page-msg">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="noexist-page-link">Retourner sur la page d’accueil</Link>
            </section>
        </main>
    ) // Fin du contenu principal
}
 
// Exportation du composant Error pour être utilisé dans d'autres parties de l'application
export default Error;
