import { fetchSpecifics } from "./api";
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
		let allMovies = [];
		for (const movie of movies) {
			let currentMovie = await fetchSpecifics(movie);
			allMovies.push(currentMovie.release_date);
			// console.log(currentMovie.release_date);
		}

		allMovies.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
		let firstAppearance = allMovies[0];
		// console.log(firstAppearance);
		return firstAppearance;
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
