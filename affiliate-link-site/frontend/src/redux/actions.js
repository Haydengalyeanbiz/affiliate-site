import axios from 'axios';

export const fetchAmazonData = (link) => async (dispatch) => {
	try {
		const response = await axios.post('/api/fetch-amazon-info', { link });
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const submitLink = (linkData) => async (dispatch) => {
	try {
		await axios.post('/api/submit-link', linkData);
		dispatch({ type: 'ADD_LINK', payload: linkData });
	} catch (error) {
		console.error(error);
	}
};
