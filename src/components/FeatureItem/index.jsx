import PropTypes from "prop-types";

function FeatureItem({ imageSrc, imageAlt, title, description }) {

    return (
        <div class="feature-item">
          <img src={imageSrc} alt={process.env.PUBLIC_URL + imageAlt} class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>{description}</p>
        </div>
    )
}

FeatureItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  
  FeatureItem.defaultProps = {
    imageAlt: "image"
  }
  
export default FeatureItem