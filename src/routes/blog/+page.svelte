<script>
	import { selectedOptionStore } from '$lib/store.js';
	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));
	import { localeFunc } from '$lib/locale.js';
	let data = localeFunc();
</script>

<p>
	{#await data then locale}
		<p>{locale[selectedOption]['nav-item-contact']}</p>
	{/await}
</p>
