<script>
	const logo = '< / > | S T F N';
</script>

<div class="bg-black/25 flex items-center">
	<p class="whitespace-nowrap px-2 font-bold">{logo}</p>
	<nav class="container w-full mx-auto justify-around items-center flex flex-wrap min-h-10">
		<slot />
	</nav>
</div>

<style>
	nav {
		max-width: 768px;
	}
</style>
