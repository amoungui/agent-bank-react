import backgroundImage from '../../assets/img/bank-tree.jpeg';
import './style.css';

function Hero() {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: '0 -50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '300px',
        position: 'relative'
    };

    return (
        <div style={heroStyle} className="hero">
            <section class="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Hero