import PropTypes from "prop-types";
import Image from "../Image";

function FeatureItem({ imageSrc, imageAlt, title, description }) {

	return (
		<div class="feature-item">
            <Image 
                data-testid="feature-item-image-testid"
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
			<h3 class="feature-item-title">{title}</h3>
			<p>{description}</p>
		</div>
	)
}

FeatureItem.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string,
	title: PropTypes.node.isRequired,
};

FeatureItem.defaultProps = {
	imageAlt: "image"
}

export default FeatureItem