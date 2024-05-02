// Importation du composant Field
import Field from "../../components/Field";
// Importation du hook useDispatch de Redux
import { useDispatch } from 'react-redux';
// Importation du hook useNavigate de react-router-dom
import { useNavigate } from 'react-router-dom';
// Importation de la fonction signIn
import { signIn } from '../../context/DataContext/index'

// Définition des types de champs
export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};

// Définition de la fonction SignIn
function SignIn() {
  // Utilisation du hook useNavigate
  const navigate  = useNavigate();
  // Utilisation du hook useDispatch
  const dispatch = useDispatch();

  // Définition de la fonction handleSignIn
  const handleSignIn = async (event) => {
    // Prévention du comportement par défaut de l'événement
    event.preventDefault();
    // Récupération de l'email et du mot de passe à partir des éléments de l'événement
    const email = event.target.elements.username.value.toString();
    const password = event.target.elements.password.value.toString();

    // Si l'email et le mot de passe existent
    if (email && password) {
      // Bloc try pour gérer les erreurs
      try {
        // Effectuer une requête fetch pour se connecter
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        // Si la réponse n'est pas ok, lever une erreur
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Conversion de la réponse en JSON
        const data = await response.json();
        // Récupération du token
        const token = data.body.token;
        // Dispatch de la fonction signIn avec le token
        dispatch(signIn(token));
        // Redirection vers '/user'
        navigate('/user');
      } catch (error) {
        // Affichage de l'erreur dans la console
        console.error("Erreur lors de la connexion:", error);
      }
    } else {
      // Affichage d'un message d'erreur si l'email ou le mot de passe n'existent pas
      console.log("username or password doesn't exist");
    }		
  };
		  
  // Rendu du composant
  return (
    // Balise principale
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

// Exportation par défaut de la fonction SignIn
export default SignIn;
