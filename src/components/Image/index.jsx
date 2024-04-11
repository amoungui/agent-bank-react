import PropTypes from "prop-types";

function Image({ imageSrc, imageAlt, dataTestid }) {

	return (
        <img
            data-testid= {dataTestid}
            src={process.env.PUBLIC_URL + imageSrc}
            alt={imageAlt}
            class="feature-icon"
        />
	)
}

Image.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string,
    dataTestid: PropTypes.string,
};

Image.defaultProps = {
	imageAlt: "image",
    dataTestid: "feature-item-image-testid"
}

export default Image