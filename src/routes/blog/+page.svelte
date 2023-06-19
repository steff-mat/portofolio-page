<script>
	import { selectedOptionStore } from '$lib/store.js';
	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));
	import { dataGetter } from '$lib/database.js';
	let data = dataGetter('locale');
</script>

<p>
	{#await data then locale}
		<p>{locale[selectedOption]['nav-item-contact']}</p>
		<img src="./icons/css.png" alt="css icon" />
	{/await}
</p>
