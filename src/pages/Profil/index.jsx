import Field from "../../components/Field";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signIn } from '../../context/DataContext/index'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};


function Profil() {
//	const navigate  = useNavigate();
//	const dispatch = useDispatch();
//	const auth = useSelector(state => state.auth); // access your auth state
// 	console.log(auth);

	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Edit name</h1>
			<form>
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
