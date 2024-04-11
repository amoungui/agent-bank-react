import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './pages/SignIn';

import './assets/css/main.css'



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);