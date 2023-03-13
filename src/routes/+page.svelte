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
	let character1Loading;

	let character2Loading;
	let result;

	let printCharacterData = false;
	let showCompareCharactersButton = false;
	let firstAppearance = [false, false];

	let starredInSameMovies;
	let planets;
	let mostExpensiveVehicles = [0, 0];

	let isLoading = {};

	async function createCharacter(inputCharacter, inputName, inputNum) {
		if (inputCharacter?.name === inputName) {
			// already same - skip logic
			return inputCharacter;
		}

		removeOldData();

		try {
			result = await api.fetchCharacterData(inputName);
		} catch (error) {
			result = error;
		}

		console.log(result.results[0]);

		let image = "images/" + result.results[0].name.replaceAll(" ", "_") + ".png";

		let {
			name,
			gender,
			height,
			mass,
			hair_color: hairColor,
			skin_color: skinColor,
			eye_color: eyeColor,
			films: movies,
		} = result.results[0];

		let character = new Character(
			name,
			gender,
			height,
			mass.replaceAll(",", ""),
			hairColor,
			skinColor,
			eyeColor,
			movies,
			image
		);

		// warning, stupid code
		if (inputNum === 1) {
			character1 = character;
			character1Loading = false;
		}
		if (inputNum === 2) {
			character2 = character;
			character2Loading = false;
		}
		return result;
	}

	function removeOldData() {
		console.log("remove old data called");
		printCharacterData = false;
		showCompareCharactersButton = true;
		firstAppearance = [false, false];
		starredInSameMovies = [];
		planets = [];
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

<!-- Loading spinner -->
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

{#if loadDone}
	<main class="[&>*]:z-100 flex flex-col items-center justify-start pb-24 [&>*]:m-1">
		<h1 class="font-starjedihollow pl-6 pt-12 text-8xl text-yellow-300 md:text-9xl">@</h1>
		<h1 class="font-starjedi py-5 text-xl text-yellow-300 md:py-8 md:text-4xl">
			the comparisons strike back
		</h1>

		<!-- Character picker -->
		<div class="flex w-full  flex-row justify-around">
			<div class="flex flex-col">
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
			</div>

			<div class="flex flex-col">
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
		</div>

		<!-- getDataButton -->
		<button
			on:click={async () => {
				removeOldData();
				character1Loading = true;
				character2Loading = true;
				// character1 = await createCharacter(character1, character1Name, character1LoadPromise);
				// await createCharacter(character2, character2Name, character2LoadPromise);
				showCompareCharactersButton = true;
			}}
			class="outline-3 outline-solid rounded-lg bg-black/70 p-2 text-yellow-300 outline-yellow-300"
			>Get data</button>

		<!-- showCompareCharactersButton -->
		{#if character1 && character2}
			<div class="items-center">
				{#if showCompareCharactersButton}
					<button
						class="outline-3 outline-solid my-4 w-32 rounded-lg bg-black/70 p-2 text-yellow-400 outline-yellow-400"
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
		{/if}

		<!-- Loading thingy for promises -->
		<div class="flex w-[100vw] flex-row justify-around">
			{#if character1Loading}
				<div class="relative">
					{#await createCharacter(character1, character1Name, 1)}
						<p class="absolute left-0 top-0">Loading...</p>
					{:catch error}
						<p class="absolute left-0 top-0">Couldn't load data :(</p>
					{/await}
				</div>
			{/if}

			{#if character2Loading}
				<div class="relative">
					{#await createCharacter(character2, character2Name, 2)}
						<p class="absolute left-0 top-0">Loading...</p>
					{:catch error}
						<p class="absolute left-0 top-0">Couldn't load data :(</p>
					{/await}
				</div>
			{/if}
		</div>

		<!-- Character display -->
		<!-- {#if character1 && character2} -->
		<div class="flex flex-row gap-2">
			{#each [character1, character2] as character, i}
				<article class="flex flex-col items-center">
					{#if character}
						<h2 class="text-xl md:text-2xl">
							{character.name}
						</h2>
						<img class="" src="{base}/{character.pictureURL}" alt="a" />
					{:else if !character && i === 0}
						<h2 class="text-xl md:text-2xl">Pick your characters</h2>
					{/if}
					{#if printCharacterData}
						<div
							class="my-2 w-full rounded-lg border-2 border-solid border-yellow-500 bg-black/70 p-2">
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

					<!-- Character method buttons -->
					{#if character}
						<div class="flex-row items-center flex-wrap [&>*]:m-2">
							<button
								on:click={async () => {
									firstAppearance[i] = await character.returnFirstAppearance(character.movies);
								}}>Show first appearance</button>
							<button
								on:click={async () => {
									isLoading["sameMovies"] = true;
									starredInSameMovies = character.returnSameMoviesArray(
										character1.movies,
										character2.movies
									);
									starredInSameMovies = await character.returnNameOfSameMovies(starredInSameMovies);
									starredInSameMovies = starredInSameMovies.join(", ");
									let index = starredInSameMovies.lastIndexOf(", ");
									starredInSameMovies =
										index !== -1
											? starredInSameMovies.substring(0, index) +
											  " and" +
											  starredInSameMovies.substring(index + 1)
											: starredInSameMovies;
									isLoading["sameMovies"] = false;
									console.log(starredInSameMovies);
								}}>Show same movies</button>
							<button
								on:click={async () => {
									isLoading["planets"] = true;

									planets = await character.returnNameOfPlanets([character1.name, character2.name]);
									let planetsAreSame;
									if (planets[0] === planets[1]) {
										planetsAreSame = true;
									}

									planets = planetsAreSame
										? `${character1.name} and ${character2.name} are both from ${planets[0]}.`
										: `${character1.name} is from ${planets[0]} and ${character2.name} is from ${planets[1]}.`;

									isLoading["planets"] = false;
									console.log(planets);
								}}>Show planets</button>
							<button
								on:click={async () => {
									isLoading[`vehicles_${i}`] = true;

									mostExpensiveVehicles[i] = await character.returnMostExpensiveVehicles([
										character.name,
									]);

									// planets = planetsAreSame
									// 	? `${character1.name} and ${character2.name} are both from ${planets[0]}.`
									// 	: `${character1.name} is from ${planets[0]} and ${character2.name} is from ${planets[1]}.`;

									isLoading[`vehicles_${i}`] = false;
									console.log(mostExpensiveVehicles);
								}}>Show most expensive vehicles</button>
						</div>
					{/if}
				</article>
			{/each}
		</div>

		<!-- DOM info box -->
		<div class="flex-col">
			{#if firstAppearance[0]}
				<p>{character1.name} first appeared on film in {firstAppearance[0]}.</p>
			{/if}
			{#if firstAppearance[1]}
				<p>{character2.name} first appeared on film in {firstAppearance[1]}.</p>
			{/if}
			{#if isLoading["sameMovies"]}
				<p>Loading movies...</p>
			{:else if starredInSameMovies && typeof starredInSameMovies === "string"}
				<p>
					{character1.name} and {character2.name} both starred in {starredInSameMovies}.
				</p>
			{/if}
			{#if isLoading["planets"]}
				<p>Loading planets...</p>
			{:else if planets && typeof planets === "string"}
				<p>
					{planets}
				</p>
			{/if}
			{#if isLoading[`vehicles_0`]}
				<p>Loading vehicles...</p>
			{:else if mostExpensiveVehicles[0] && typeof mostExpensiveVehicles[0] === "object"}
				<p>
					{character1.name}'s most expensive vehicle is a {mostExpensiveVehicles[0][0].name} with a value
					of {mostExpensiveVehicles[0][0].cost_in_credits}.
				</p>
			{/if}
			{#if isLoading["vehicles_1"]}
				<p>Loading vehicles...</p>
			{:else if mostExpensiveVehicles[1] && typeof mostExpensiveVehicles[1] === "object"}
				<p>
					{character2.name}'s most expensive vehicle is a {mostExpensiveVehicles[1][0].name} with a value
					of {mostExpensiveVehicles[1][0].cost_in_credits} credits.
				</p>
			{/if}
		</div>

		<!-- Comparison -->
		{#if comparisonString && printCharacterData}
			<aside
				class="my-4 mb-12 flex items-center rounded-lg border-2 border-solid border-yellow-500 bg-black/70 p-2">
				<ul>
					{#each comparisonString.split("^") as li}
						<li>
							{li}
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
		<!-- {/if} -->
	</main>

	<footer class="fixed right-0 bottom-0 m-4">
		<p>
			by
			<a
				class=" underline-blue-600 underline hover:text-blue-600"
				href="https://github.com/henrikvilhelmberglund"
				><img class="inline w-6" src="{base}/Henrik.png" alt="avatar" />henrikvilhelmberglund</a>
		</p>
	</footer>
{/if}

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
