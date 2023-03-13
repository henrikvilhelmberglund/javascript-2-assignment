import { fetchCharacterData, fetchSpecifics } from "./api";
export class Character {
	constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureURL) {
		this.name = name;
		this.gender = gender;
		// turn height and mass into numbers
		this.height = JSON.parse(height);
		this.mass = JSON.parse(mass);
		this.hairColor = hairColor;
		this.skinColor = skinColor;
		this.eyeColor = eyeColor;
		this.movies = movies;
		this.pictureURL = pictureURL;
	}

	async returnFirstAppearance(movies) {
		let promises = movies.map((movie) => fetchSpecifics(movie));
		let allMovies = await Promise.allSettled(promises);
		allMovies = allMovies.map((movie) => movie.value.release_date);
		console.log(allMovies);

		// old silly version
		// let allMovies = [];
		// for (const movie of movies) {
		// 	let currentMovie = await fetchSpecifics(movie);
		// 	allMovies.push(currentMovie.release_date);
		// 	console.log(currentMovie.release_date);
		// }

		allMovies.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
		let firstAppearance = allMovies[0];
		// console.log(firstAppearance);
		return firstAppearance;
	}

	/**
	 * ## Function description
	 * @param {Array<string>} movies1 - An array of character1's movies.
	 * @param {Array<string>} movies2 - An array of character2's movies.
	 * @returns {Array<string>} An array of the movies which are the same.
	 */
	returnSameMoviesArray(movies1, movies2) {
		let same = movies1.filter((movie) => movies2.includes(movie));

		return same;
	}

	async returnNameOfSameMovies(movies) {
		let promises = movies.map((movie) => fetchSpecifics(movie));
		let nameOfSameMovies = await Promise.allSettled(promises);
		nameOfSameMovies = nameOfSameMovies.map((movie) => movie.value.title);
		console.log(nameOfSameMovies);

		// old silly version
		// let allMovies = [];
		// for (const movie of movies) {
		// 	let currentMovie = await fetchSpecifics(movie);
		// 	allMovies.push(currentMovie.release_date);
		// 	console.log(currentMovie.release_date);
		// }
		// console.log(firstAppearance);
		return nameOfSameMovies;
	}

	async returnNameOfPlanets(characterNames) {
		let characterPromises = characterNames.map((character) => fetchCharacterData(character));
		let characterData = await Promise.allSettled(characterPromises);
		characterData = characterData.map((character) => character.value.results[0]);

		let promises = characterData.map((character) => fetchSpecifics(character.homeworld));
		let nameOfPlanets = await Promise.allSettled(promises);
		nameOfPlanets = nameOfPlanets.map((planet) => planet.value.name);
		console.log(nameOfPlanets);
		return nameOfPlanets;
	}

	async returnMostExpensiveVehicles(characterNames) {
		let characterPromises = characterNames.map((character) => fetchCharacterData(character));
		let characterData = await Promise.allSettled(characterPromises);
		characterData = characterData.map((character) => character.value.results[0]);

		let vehiclePromises = characterData.flatMap((character) =>
			character.vehicles.map((vehicle) => fetchSpecifics(vehicle))
		);
		let starshipPromises = characterData.flatMap((character) =>
			character.starships.map((starship) => fetchSpecifics(starship))
		);
		let totalVehicles = await Promise.allSettled([...vehiclePromises, ...starshipPromises]);

		let maximumPrice = totalVehicles
			.filter(
				(result) => result.status === "fulfilled" && result.value.cost_in_credits !== "unknown"
			)
			.map((result) => result.value)
			.sort((a, b) => b.cost_in_credits - a.cost_in_credits);
		// nameOfPlanets = nameOfPlanets.map((planet) => planet.value.name);
		console.log(maximumPrice);
		return maximumPrice;
	}
}

export const allCharacters = [
	"Luke Skywalker",
	"Obi-Wan Kenobi",
	"Leia Organa",
	"Jabba Desilijic Tiure",
	"R2-D2",
	"C-3PO",
	"Chewbacca",
	"Han Solo",
	"Yoda",
	"Darth Vader",
	"Padmé Amidala",
	"Ayla Secura",
	"Jar Jar Binks",
];
