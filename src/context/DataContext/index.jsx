// models.js

// actions.js
export const signIn = (username, password) => async (dispatch) => {
	try {
		const response = await fetch("http://localhost:3001/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		});
		const data = await response.json();
		console.log(data);
		dispatch({ type: "SIGN_IN", payload: data });
	} catch (error) {
		console.error("Erreur lors de la connexion:", error);
	}
};

export const getUserDetails = async (token) => {
	try {
		const response = await fetch("http://localhost:3001/user/profile", {
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des détails de l'utilisateur:",
			error
		);
	}
};
