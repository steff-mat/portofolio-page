<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import NavItem from '../components/NavItem.svelte';
	import db from '../../src/app.js';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import Language from '../components/Language.svelte';
	import { selectedOptionStore } from '$lib/store.js';
	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));

	let locale = [];

	onMount(async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'locale'));
			locale = querySnapshot.docs.map((doc) => doc.data());
			console.log(locale);
		} catch (error) {
			console.error('Error fetching documents:', error);
		}
	});
</script>

<slot />

<NavBar>
	{#if locale.length}
		<NavItem route="/">{locale[selectedOption]['nav-item-home']}</NavItem>
	{:else}
		<p>Loading...</p>
	{/if}
	<Language />
</NavBar>
