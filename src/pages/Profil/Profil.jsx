// Importation du composant Field
import Field from "../../components/Field/Field";
// Importation des hooks useDispatch et useSelector de Redux
import { useDispatch, useSelector } from 'react-redux';
// Importation du hook useNavigate de react-router-dom
import { useNavigate } from 'react-router-dom';
// Importation de la fonction signIn
import { signIn } from '../../context/DataContext/index'

// Définition des types de champs
export const FIELD_TYPES = {
  INPUT_TEXT: 1,
};

// Définition de la fonction Profil
const Profil = () => {
	// Utilisation du hook useNavigate
	const navigate  = useNavigate();
	// Utilisation du hook useDispatch
	const dispatch = useDispatch();
	// Accès à l'état d'authentification
	const auth = useSelector(state => state.auth);
 	// Affichage de l'état d'authentification dans la console
	console.log(auth);

    // Définition de la fonction handleEditName
    const handleEditName = async (event) => {
        // Prévention du comportement par défaut de l'événement
        event.preventDefault();
        // Récupération du nom d'utilisateur à partir des éléments de l'événement
        const username = event.target.elements.username.value.toString();
        // Bloc try pour gérer les erreurs
        try {
            // Ouverture du cache 'user-profile'
            const cache = await caches.open('user-profile');
            // Tentative de récupération de la réponse mise en cache
            const cachedResponse = await cache.match("http://localhost:3001/api/v1/user/profile");
            let response;
            // Si une réponse est en cache, l'utiliser
            if (cachedResponse) {
                response = cachedResponse;
            } else {
                // Sinon, effectuer une requête fetch
                response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${auth.token}` // Passer le token ici
                    },
                    body: JSON.stringify({ username }),
                });
                // Si la réponse n'est pas ok, lever une erreur
                if (!response.ok) {
                    const errorBody = await response.json();
                    console.error('Erreur lors de la connexion:', errorBody);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Mettre en cache la réponse
                cache.put("http://localhost:3001/api/v1/user/profile", response.clone());
            }
            // Conversion de la réponse en JSON
            const data = await response.json();
            // Dispatch de la fonction signIn avec le token
            dispatch(signIn(data.body.token));
            // Dispatch de la fonction signIn avec le nom d'utilisateur
            dispatch(signIn(username));
            // Sauvegarde du nom d'utilisateur dans le localStorage
            localStorage.setItem('username', username);
            // Redirection vers '/user'
            navigate('/user');
        } catch (error) {
            // Affichage de l'erreur dans la console
            console.error("Erreur lors de la connexion:", error);
        }
    };    
    
    // Rendu du composant
	return (
		// Balise principale
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Edit name</h1>
			<form onSubmit={handleEditName} data-testid="form">
                <div className="input-wrapper">
                    <Field
                    type={FIELD_TYPES.INPUT_TEXT}
                    placeholder=""
                    label="Username"
                    id="username"
                    testId="username"
                    />
                </div>
                <input 
                    type="submit" 
                    value="Submit" 
                    className="sign-in-button" 
                />
			</form>
		</section>
		</main>
	);
}

// Exportation par défaut de la fonction Profil
export default Profil;
