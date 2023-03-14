/**
 *
 * @param {string} name
 * @returns
 */
export async function fetchCharacterData(name) {
	try {
		let response = await fetch(`https://swapi.dev/api/people/?search=${name}`, {
			method: "GET",
		});
		let data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		// return Promise.reject(error);
		throw error;
	}
}

/**
 *
 * @param {string} link
 * @returns
 */
export async function fetchSpecifics(link) {
	try {
		let response = await fetch(link, {
			method: "GET",
		});
		let data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		throw error;
	}
}
