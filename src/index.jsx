// Importation de React
import React from 'react'
// Importation de ReactDOM
import ReactDOM from "react-dom/client";
// Importation des composants nécessaires de react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Importation du composant Provider de react-redux
import { Provider } from 'react-redux'
// Importation des composants de l'application
import Home from './pages/Home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import SignIn from './pages/SignIn'
import User from "./pages/user";
import Profil from './pages/Profil';
// Importation du store Redux
import store from "./app/store"

// Importation du CSS principal
import './assets/css/main.min.css'

// Création d'une racine pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application
root.render(
	// Utilisation du mode strict de React
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/user" element={<User />} />
					<Route path="/profil" element={<Profil />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>		
		</Provider>
	</React.StrictMode>
);
