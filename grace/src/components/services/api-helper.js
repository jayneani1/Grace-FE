import axios from 'axios'

const api = axios.create({
	baseURL: "https://jaynegrace3/.herokuapp.com/"
}); 

export const createUser = async (user) => {
	try {
		return await api.post('/auth/users/register/', user)
	}
	catch (err) {
		return err
	}
}

export const verifyUser = async (user) => {
	try {
		return await api.post(`/auth/users/login/`, user);
	}
	catch (err) {
		return err
	}
};

export const createEntry = async (entry, token) => {
	try {
		return await api.post(`/entry/entry/`, entry, {
			headers: {
				authorization: 'JWT ' + token
			}
		});
	}
	catch (err) {
		console.log(err)
		return err
	}
}; 

export const getEntryDetails = async (id) => {
	try {
		return await api.get(`entries/public-entries/${id}`)
	} catch (e) {
		console.log(e);
		return (e);
	}
};
