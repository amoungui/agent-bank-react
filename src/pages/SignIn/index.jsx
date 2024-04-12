import { Link } from "react-router-dom";
import Field from "../../components/Field";
import { useDispatch } from "react-redux";
import { signIn } from "../../context/DataContext/index";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};

function SignIn() {
	const dispatch = useDispatch();
	const handleSubmit = event => {
		event.preventDefault();
		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;
		dispatch(signIn(username, password));
	};	

	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<Field
				type={FIELD_TYPES.INPUT_TEXT}
				placeholder=""
				label="Username"
				id="username"
				/>
			</div>
			<div className="input-wrapper">
				<Field
				type={FIELD_TYPES.PASSWORD}
				placeholder=""
				label="Password"
				id="password"
				/>
			</div>
			<div className="input-remember">
				<Field
				type={FIELD_TYPES.CHECKBOX}
				placeholder=""
				label="Remember me"
				id="remember-me"
				/>
			</div>
			<Link to="/user" className="sign-in-button">
				Sign In
			</Link>
			</form>
		</section>
		</main>
	);
}

export default SignIn;
