<script>
	import { selectedOptionStore } from '$lib/store.js';
	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));
	import { localeFunc } from '$lib/locale.js';
	let data = localeFunc();
</script>

<div class="ns-gradient">
	{#await data then locale}
		<h1>{locale[selectedOption]['contact-title']}</h1>
		<h3>{locale[selectedOption]['contact-sub-title']}</h3>
		<div class="flex flex-col sm:flex-row">
			<div class="w-full h-full bg-blue-700">
				<img src="src/icons/phone.svg" alt="phone icon" />
				<p>{locale[selectedOption]['contact-phone-text']}</p>
				<p>{locale[selectedOption]['contact-phone-number']}</p>
			</div>
			<div class="w-full h-full bg-green-600">
				<img src="src/icons/email.svg" alt="email icon" />
				<p>{locale[selectedOption]['contact-email-text']}</p>
				<p>{locale[selectedOption]['contact-email-address']}</p>
			</div>
		</div>
	{/await}
</div>

<style>
	.ns-gradient {
		height: calc(100dvh - 2.5rem);
		background: rgb(42, 34, 195);
		background: linear-gradient(25deg, rgba(42, 34, 195, 0.25) 0%, rgba(49, 253, 45, 0.25) 100%);
	}
</style>
