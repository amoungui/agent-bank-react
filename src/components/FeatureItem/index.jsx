import PropTypes from "prop-types";
import Image from "../Image";

// eslint-disable-next-line import/order
import { v4 } from 'uuid';

const uuidv4 = v4;

function FeatureItem({ imageSrc, imageAlt, title, description }) {

	return (
		<div className="feature-item">
            <Image 
                data-testid="feature-item-image-testid"
				key={`Image-item-${uuidv4()}`}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
			<h3 className="feature-item-title">{title}</h3>
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