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

		let image1 = result1.name.replaceAll(" ", "_") + "_placeholder.png";
		let image2 = result2.name.replaceAll(" ", "_") + "_placeholder.png";

		character1 = new Character(...result1, image1);
		console.log(character1);
		character2 = new Character(...result2, image2);
		console.log(character2);
	}
</script>

<main class="flex flex-col items-center justify-center [&>*]:m-1">
	<h1 class="text-7xl">Star Wars</h1>
	<h1 class="text-5xl">The comparisons strike again</h1>

	<article>
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
	</article>

	<button on:click={createCharacters} class="rounded-lg bg-blue-400 p-2">Get data</button>
</main>

<footer class="absolute right-0 bottom-0 m-4">
	<p>
		by
		<a
			class="underline-blue-600 underline hover:text-blue-600"
			href="https://github.com/henrikvilhelmberglund"
			><img class="inline w-6" src="{base}/Henrik.png" alt="avatar" />henrikvilhelmberglund</a>
	</p>
</footer>
