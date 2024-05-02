// Importation de l'image de fond depuis le fichier '../../assets/img/bank-tree.webp'
import backgroundImage from '../../assets/img/bank-tree.webp';

// Définition du composant Hero
function Hero() {
    // Définition du style du héros, qui inclut l'image de fond
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    // Rendu du composant Hero
    return (
        // Début du div du héros avec le style défini et une classe CSS
        <div style={heroStyle} className="hero" data-testid="hero-image-testid">
            <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div> // Fin du div du héros
    )
}

// Exportation du composant Hero pour être utilisé dans d'autres parties de l'application
export default Hero;
