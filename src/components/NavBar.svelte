<script>
	import Language from '../components/Language.svelte';
</script>

<div class="bg-black/25">
	<nav class="container w-full mx-auto justify-evenly items-center flex h-10">
		<slot />
		<Language />
	</nav>
</div>

<style>
	nav {
		max-width: 768px;
	}
</style>
