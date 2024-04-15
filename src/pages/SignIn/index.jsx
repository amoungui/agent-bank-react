import { Link } from "react-router-dom";
import Field from "../../components/Field";
import store from "../../app/store";
import { signIn, getUserDetails } from '../../context/DataContext/index';

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};

function SignIn() {

	const handleSubmit = async event => {
		event.preventDefault();
		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;
		const signInResult = await signIn(username, password);
		store.dispatch({ type: 'SIGN_IN', payload: signInResult.token });
		const userDetails = await getUserDetails(signInResult.token);
		store.dispatch({ type: 'GET_USER_DETAILS', payload: userDetails });
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
