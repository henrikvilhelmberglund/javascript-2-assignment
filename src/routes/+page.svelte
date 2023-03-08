<script>
	import { base } from "$app/paths";
	import { Character, allCharacters } from "$lib/character";
	import * as api from "$lib/api.js";

	let character1Name;
	let character2Name;

	let character1;
	let character2;

	async function createCharacters() {
		let result1 = await api.fetchCharacterData(character1Name);
		let result2 = await api.fetchCharacterData(character2Name);

		console.log(result1.results[0]);

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
			mass1,
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
			mass2,
			hairColor2,
			skinColor2,
			eyeColor2,
			movies2,
			image2
		);
		console.log(character2);
	}
</script>

<main class="flex flex-col items-center justify-center [&>*]:m-1">
	<h1 class="text-7xl">Star Wars</h1>
	<h1 class="text-5xl">The comparisons strike again</h1>

	<div>
		<label for="character1Name">Pick character 1</label>
		<select bind:value={character1Name} name="character1Name" id="character1Name">
			{#each allCharacters as character}
				<option value={character}>{character}</option>
			{/each}
		</select>

		<label for="character2Name">Pick character 2</label>
		<select bind:value={character2Name} name="character2Name" id="character2Name">
			{#each allCharacters as character}
				<option value={character}>{character}</option>
			{/each}
		</select>
	</div>

	<button on:click={createCharacters} class="rounded-lg bg-blue-400 p-2">Get data</button>

	<article class="flex flex-row justify-between ">
		{#if character1}
			<div class="flex-col items-center">
				<h2 class="text-2xl">
					{character1.name ?? "empty"}
				</h2>
				<img class="w-[50%]" src={character1.pictureURL} alt="a" />
			</div>
		{/if}
		{#if character2}
			<div class="flex-col items-center">
				<h2 class="text-2xl">
					{character2.name ?? "empty"}
				</h2>
				<img class="w-[50%]" src={character2.pictureURL} alt="b" />
			</div>
		{/if}
	</article>
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
