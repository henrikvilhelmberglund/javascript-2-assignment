
export class Character {
	constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureURL) {
		this.name = name;
		this.gender = gender;
		this.height = JSON.parse(height);
		this.mass = JSON.parse(mass);
		this.hairColor = hairColor;
		this.skinColor = skinColor;
		this.eyeColor = eyeColor;
		this.movies = movies;
		this.pictureURL = pictureURL;
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
