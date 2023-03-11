<script>
	import { base } from "$app/paths";
	import { Character, allCharacters } from "$lib/character";
	import * as api from "$lib/api.js";

	let character1Name;
	let character2Name;

	let character1;
	let character2;

	async function createCharacters() {
		removeOldData();

		let result1 = await api.fetchCharacterData(character1Name);
		let result2 = await api.fetchCharacterData(character2Name);

		console.log(result1.results[0]);
		console.log(result2.results[0]);

		let image1 = "images/" + result1.results[0].name.replaceAll(" ", "_") + "_placeholder.png";
		let image2 = "images/" + result2.results[0].name.replaceAll(" ", "_") + "_placeholder.png";

		let {
			name: name1,
			gender: gender1,
			height: height1,
			mass: mass1,
			hair_color: hairColor1,
			skin_color: skinColor1,
			eye_color: eyeColor1,
			films: movies1,
		} = result1.results[0];
		let {
			name: name2,
			gender: gender2,
			height: height2,
			mass: mass2,
			hair_color: hairColor2,
			skin_color: skinColor2,
			eye_color: eyeColor2,
			films: movies2,
		} = result2.results[0];
		character1 = new Character(
			name1,
			gender1,
			height1,
			mass1.replaceAll(",", ""),
			hairColor1,
			skinColor1,
			eyeColor1,
			movies1,
			image1
		);
		console.log(character1);
		character2 = new Character(
			name2,
			gender2,
			height2,
			// replace commas in mass to nothing
			mass2.replaceAll(",", ""),
			hairColor2,
			skinColor2,
			eyeColor2,
			movies2,
			image2
		);
		console.log(character2);
	}
	let printCharacterData = false;
	let showCompareCharactersButton = false;
	let firstAppearance = [false, false];

	function removeOldData() {
		printCharacterData = false;
		showCompareCharactersButton = true;
		firstAppearance = [false, false];
	}

	function caps(string) {
		if (string === "hairColor" || string === "eyeColor" || string === "skinColor") {
			let firstHalf = string.split("Color")[0];
			return firstHalf[0].toUpperCase() + firstHalf.slice(1) + " color";
		} else {
			return string[0].toUpperCase() + string.slice(1);
		}
	}

	let comparisonString = "";

	function changeTextColor() {
		for (const [key, value] of Object.entries(character1)) {
			if (typeof value === "number") {
				let element1 = document.querySelector(`#${key}_0`);
				let element2 = document.querySelector(`#${key}_1`);
				if (value > character2[key]) {
					element1.className = "green";
					element2.className = "red";
					comparisonString += `${character1.name}'s ${key} is greater than ${character2.name}'s.^`;
				} else if (value < character2[key]) {
					element2.className = "green";
					element1.className = "red";
					comparisonString += `${character2.name}'s ${key} is greater than ${character1.name}'s.^`;
				} else {
					element1.className = "green";
					element2.className = "green";
					comparisonString += `${character1.name} and ${character2.name} have the same ${key}.^`;
				}
			} else if (
				key === "name" ||
				key === "gender" ||
				key === "hairColor" ||
				key === "skinColor" ||
				key === "eyeColor"
			) {
				// not sure if eyeColor omission was on purpose or not, my guess is not, so I added it here
				// also added name because why not
				let element1 = document.querySelector(`#${key}_0`);
				let element2 = document.querySelector(`#${key}_1`);
				if (value === character2[key]) {
					element1.className = "green";
					element2.className = "green";
					if (key.includes("Color")) {
						comparisonString += `${character1.name} and ${character2.name} have the same ${
							key.split("Color")[0]
						} color.^`;
					} else {
						comparisonString += `${character1.name} and ${character2.name} are both ${value}.^`;
					}
				}
			} else if (key === "movies") {
				let element1 = document.querySelector(`#${key}_0`);
				let element2 = document.querySelector(`#${key}_1`);
				if (value.length > character2[key].length) {
					element1.className = "green";
					element2.className = "red";
					comparisonString += `^${character1.name} has starred in more movies than ${character2.name}.^`;
				} else if (value.length < character2[key].length) {
					element2.className = "green";
					element1.className = "red";
					comparisonString += `^${character2.name} has starred in more movies than ${character1.name}.^`;
				} else {
					element1.className = "green";
					element2.className = "green";
					comparisonString += `^${character1.name} and ${character2.name} have starred in the same number of movies.^`;
				}
			}
			// console.log("key: " + key, "value:" + value);
		}
	}
</script>

<main class="flex flex-col items-center justify-center [&>*]:m-1">
	<h1 class="text-7xl">Star Wars</h1>
	<h1 class="text-5xl">The comparisons strike again</h1>

	<div>
		<label for="character1Name">Pick character 1</label>
		<select
			bind:value={character1Name}
			on:change={(showCompareCharactersButton = false)}
			name="character1Name"
			id="character1Name">
			{#each allCharacters as character}
				<option value={character}>{character}</option>
			{/each}
		</select>

		<label for="character2Name">Pick character 2</label>
		<select
			bind:value={character2Name}
			on:change={(showCompareCharactersButton = false)}
			name="character2Name"
			id="character2Name">
			{#each allCharacters as character}
				<option value={character}>{character}</option>
			{/each}
		</select>
	</div>

	<button
		on:click={() => {
			createCharacters();
			showCompareCharactersButton = true;
		}}
		class="rounded-lg bg-blue-400 p-2">Get data</button>

	<div class="flex flex-col">
		{#if character1 && character2}
			<div class="items-center">
				{#if showCompareCharactersButton}
					<button
						class="w-32 rounded-lg bg-blue-400 p-2"
						on:click={() => {
							comparisonString = "";
							printCharacterData = true;
							// change text color after 1 second
							setTimeout(() => {
								changeTextColor();
							}, 1000);
						}}>Compare characters</button>
				{/if}
			</div>
			<div class="flex flex-row justify-between ">
				{#each [character1, character2] as character, i}
					<article>
						<div class="flex-col items-center">
							<h2 class="text-2xl">
								{character.name ?? "empty"}
							</h2>
							<img class="w-[50%]" src="{base}/{character.pictureURL}" alt="a" />
							{#if printCharacterData}
								<div class="my-2 w-[50%] rounded-lg border-2 border-solid border-pink-500 p-2">
									{#each Object.entries(character) as [key, value]}
										{#if key !== "movies" && key !== "pictureURL"}
											{#if key === "height"}
												<p id="{key}_{i}">{caps(key)}: {value}cm</p>
											{:else if key === "mass"}
												<p id="{key}_{i}">{caps(key)}: {value}kg</p>
											{:else}
												<p id="{key}_{i}">{caps(key)}: {value}</p>
											{/if}
										{:else if key === "movies"}
											<p id="movies_{i}">Stars in {value.length} movies</p>
										{/if}
									{/each}
								</div>
							{/if}
						</div>
						<div class="flex-row items-center [&>*]:m-2">
							<button
								on:click={async () => {
									firstAppearance[i] = await character.returnFirstAppearance(character.movies);
								}}>Show first appearance</button>
							<button>More buttons</button>
						</div>
						<div class="flex-col">
							{#if firstAppearance[i]}
								<p>{character.name} first appeared on film in {firstAppearance[i]}.</p>
							{/if}
						</div>
					</article>
				{/each}
			</div>

			{#if comparisonString && printCharacterData}
				<aside class="my-4 flex items-center rounded-lg border-2 border-solid border-pink-500 p-2">
					<ul>
						{#each comparisonString.split("^") as li}
							<li>
								{li}
							</li>
						{/each}
					</ul>
				</aside>
			{/if}
		{/if}
	</div>
</main>

<footer class="fixed right-0 bottom-0 m-4">
	<p>
		by
		<a
			class="underline-blue-600 underline hover:text-blue-600"
			href="https://github.com/henrikvilhelmberglund"
			><img class="inline w-6" src="{base}/Henrik.png" alt="avatar" />henrikvilhelmberglund</a>
	</p>
</footer>

<style>
	:global(.green) {
		transition: all 300ms;
		color: green;
		font-weight: 700;
	}
	:global(.red) {
		transition: all 300ms;
		color: red;
	}
</style>
