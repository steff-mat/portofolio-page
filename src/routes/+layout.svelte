<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import NavItem from '../components/NavItem.svelte';
	import db from '../../src/app.js';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { selectedOptionStore } from '$lib/store.js';
	import Footer from '../components/Footer.svelte';
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

<NavBar>
	{#if locale.length}
		<NavItem route="/">{locale[selectedOption]['nav-item-home']}</NavItem>
		<NavItem route="/contact">{locale[selectedOption]['nav-item-contact']}</NavItem>
		<NavItem route="/blog">{locale[selectedOption]['nav-item-blog']}</NavItem>
	{:else}
		<p>Loading...</p>
	{/if}
</NavBar>
<slot />
<Footer />
