<script>
	import { base } from "$app/paths";
	import { Character, allCharacters } from "$lib/character";
	import * as api from "$lib/api.js";
	import { onMount } from "svelte";

	// wait for stuff to load before displaying
	let loadDone = false;
	onMount(() => {
		loadDone = true;
	});

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

<svelte:head>
	<link rel="preload" href="StarJedi.woff2" as="font" type="font/woff2" crossorigin />
	<link rel="preload" href="StarJediHollow.woff2" as="font" type="font/woff2" crossorigin />
	<link rel="preload" href="StarJediRounded.woff2" as="font" type="font/woff2" crossorigin />
</svelte:head>

{#if !loadDone}
	<div class="h-[100vh] w-[100vw] bg-black">
		<div role="status" class="flex min-h-[50vh] items-center justify-center">
			<svg
				aria-hidden="true"
				class="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-800 dark:text-gray-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor" />
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill" />
			</svg>
			<p class="py-4 text-2xl">Loading...🚀</p>
			<span class="sr-only">Loading...</span>
		</div>
	</div>
{/if}

	<div>
		<label for="character1Name">Pick character 1</label>
		<select
			class="rounded border"
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
			class="rounded border"
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
	@font-face {
		font-family: "Star Jedi";
		src: local("StarJedi.woff2"), url("StarJedi.woff2");
	}
	@font-face {
		font-family: "Star Jedi Hollow";
		src: local("StarJediHollow.woff2"), url("StarJediHollow.woff2");
		font-display: block;
	}
	@font-face {
		font-family: "Star Jedi Rounded";
		src: local("StarJediRounded.woff2"), url("StarJediRounded.woff2");
	}
	:global(.green) {
		transition: all 300ms;
		color: green;
		font-weight: 700;
	}
	:global(.red) {
		transition: all 300ms;
		color: red;
	}

	:global(body) {
		background-image: url("pexels-alex-andrews-5086477.webp");
		background-size: 200%;
	}

	:global(body, select) {
		background-color: black;
		color: white;
	}
</style>
