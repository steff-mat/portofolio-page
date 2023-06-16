<script>
	import { selectedOptionStore } from '$lib/store.js';

	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));

	function handleChange(event) {
		selectedOptionStore.set(event.target.value);
	}
</script>

<div class="flex">
	<p class="flex items-center">Language:</p>
	<select
		name="language"
		id="language"
		bind:value={selectedOption}
		on:change={handleChange}
		class="bg-black/0 h-10 flex items-center"
	>
		<option value="1">Hungarian</option>
		<option value="0">English</option>
		<option value="2">Romanian</option>
	</select>
</div>
