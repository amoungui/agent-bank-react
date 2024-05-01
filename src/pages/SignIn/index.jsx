import Field from "../../components/Field";
import { useDispatch } from 'react-redux';
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

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.elements.username.value.toString();
    const password = event.target.elements.password.value.toString();

    if (email && password) {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const token = data.body.token;
        dispatch(signIn(token));
        navigate('/user'); // redirect to /user
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
      }
    } else {
      console.log("username or password doesn't exist");
    }		
  };
		  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn} data-testid="form">
          <div className="input-wrapper">
            <Field
              type={FIELD_TYPES.INPUT_TEXT}
              placeholder=""
              label="Username"
              id="username"
              testId="username"
            />
          </div>
          <div className="input-wrapper">
            <Field
              type={FIELD_TYPES.PASSWORD}
              placeholder=""
              label="Password"
              id="password"
              testId="password"
            />
          </div>
          <div className="input-remember">
            <Field
              type={FIELD_TYPES.CHECKBOX}
              placeholder=""
              label="Remember me"
              id="remember-me"
              testId="remember-me"
            />
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}

export default SignIn;
