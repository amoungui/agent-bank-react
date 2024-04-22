import Field from "../../components/Field";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../context/DataContext/index'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};


function SignIn() {
	const navigate  = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth); // access your auth state
	console.log(auth);

	const handleSignIn = async (event) => {
		event.preventDefault();
		const email = event.target.elements.username.value.toString();
		const password = event.target.elements.password.value.toString();
		if (email!== "" && password !== ""){
			try {
				const cache = await caches.open('user-login');
				const cachedResponse = await cache.match("http://localhost:3001/api/v1/user/login");
				let response;
				if (cachedResponse) {
					response = cachedResponse;
				} else {
					response = await fetch("http://localhost:3001/api/v1/user/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					});
					if (!response.ok) {
						const errorBody = await response.json();
						console.error('Erreur lors de la connexion:', errorBody);
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					// Mettre en cache la réponse
					cache.put("http://localhost:3001/api/v1/user/login", response.clone());
				}
				const data = await response.json();
				const token = data.body.token;
				dispatch(signIn(token));
				navigate('/user'); // redirect to /user
			} catch (error) {
				console.error("Erreur lors de la connexion:", error);
			}
		}else{
			console.log("username or password doesn't existe");
		}		
	};
		  

	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSignIn}>
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
			<input type="submit" value="Sign In" className="sign-in-button" />
			</form>
		</section>
		</main>
	);
}

export default SignIn;
