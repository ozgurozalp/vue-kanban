const URL = 'http://localhost:3000/posts';

const parse = (data: any) => {
	// @ts-ignore
	return data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.data }), {});
};

export const getPosts = async () => {
	const data = await (await fetch(URL)).json();
	return parse(data);
};

export const getPost = async (id: string) => {
	const { data } = await (await fetch(`${URL}/${id}`)).json();
	return data;
};

export const updatePost = async (id: string, data: any) => {
	const response = await fetch(`${URL}/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	// @ts-ignore
	await response.json();
	return [id, data];
};

export const insertPost = async (key: string, value: any) => {
	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		// @ts-ignore
		body: JSON.stringify({
			id: key,
			data: value,
		}),
	});
	return response.json();
};

export const deletePost = async (id: string) => {
	const response = await fetch(`${URL}/${id}`, {
		method: 'DELETE',
	});
	return response.json();
};
