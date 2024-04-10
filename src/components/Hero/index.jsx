import backgroundImage from '../../assets/img/bank-tree.jpeg';

function Hero() {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div style={heroStyle} className="hero" data-testid="hero-image-testid">
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