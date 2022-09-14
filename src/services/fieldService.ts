const URL = 'http://localhost:3000/fields';

export const getFields = async () => {
	return await (await fetch(URL)).json();
};
