<script>
	import { selectedOptionStore } from '$lib/store.js';

	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));

	function handleChange(event) {
		selectedOptionStore.set(event.target.value);
	}
</script>

<div class="flex absolute bottom-0">
	<p>Language:</p>
	<select name="language" id="language" bind:value={selectedOption} on:change={handleChange}>
		<option value="1">Hungarian</option>
		<option value="0">English</option>
		<option value="2">Romanian</option>
	</select>
</div>
