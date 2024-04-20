import Field from "../../components/Field";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../context/DataContext/index'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
};


function Profil() {
	const navigate  = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth); // access your auth state
 	console.log(auth);

    const handleEditName = async (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value.toString();
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}` // Pass the token here
                },
                body: JSON.stringify({ username }),
            });
            if (!response.ok) {
                const errorBody = await response.json();
                console.error('Erreur lors de la connexion:', errorBody);
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                
            const data = await response.json();
            dispatch(signIn(data.body.token));
            dispatch(signIn(username));
            // Sauvegarder le username dans le localStorage
            localStorage.setItem('username', username);
            navigate('/user'); // redirect to /user
        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
        }
    };
    
	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Edit name</h1>
			<form onClick={handleEditName}>
                <div className="input-wrapper">
                    <Field
                    type={FIELD_TYPES.INPUT_TEXT}
                    placeholder=""
                    label="Username"
                    id="username"
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

export default Profil;
