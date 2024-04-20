import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function Button({title, className, path}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);  
    }

    return (
        <button className={className} onClick={handleClick}>{title}</button>
    )
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.node.isRequired,
	path: PropTypes.node.isRequired,
};

Button.defaultProps = {
	title: "title",
    className: "edit-button",
	path: "/profil"
}

export default Button;
