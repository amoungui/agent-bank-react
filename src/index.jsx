import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home/'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import User from "./pages/User";
import store from "./app/store"

import './assets/css/main.css'



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>				
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/user" element={<User />} />
				</Routes>
				<Footer />
			</Router>		
		</Provider>
	</React.StrictMode>
);