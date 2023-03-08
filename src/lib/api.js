export async function fetchCharacterData(name) {
	try {
		let response = await fetch(`https://swapi.dev/api/people/?search=${name}`, {
			method: "GET",
		});
		let data = await response.json();
		console.log(data.results);
		return data.results;
	} catch (error) {
		return error;
	}
}

export async function fetchSpecifics(link) {
	try {
		let response = await fetch(link, {
			method: "GET",
		});
		let data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		return error;
	}
}
