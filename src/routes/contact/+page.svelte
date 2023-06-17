<script>
	import { selectedOptionStore } from '$lib/store.js';
	let selectedOption;
	selectedOptionStore.subscribe((value) => (selectedOption = value));
	import { localeFunc } from '$lib/locale.js';
	let data = localeFunc();
</script>

<div class="ns-gradient text-center pt-10 sm:pt-40">
	{#await data then locale}
		<div>
			<h1 class="text-5xl">{locale[selectedOption]['contact-title']}!</h1>
			<img
				src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975075/Stefan/people_bdaz7w.svg"
				alt="people icon"
				class="flex my-0 mx-auto"
			/>
			<h3 class="text-2xl">{locale[selectedOption]['contact-sub-title']}!</h3>
		</div>
		<div class="flex flex-col sm:flex-row">
			<div class="w-11/12 sm:w-[48%] h-full bg-blue-600 mt-10 p-5 my-0 mx-auto rounded-xl">
				<img
					src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975076/Stefan/phone_dma7is.svg"
					alt="phone icon"
					class="flex my-0 mx-auto"
				/>
				<p>{locale[selectedOption]['contact-phone-text']}</p>
				<a href="tel:{locale[selectedOption]['contact-phone-number']}"
					>{locale[selectedOption]['contact-phone-number']}</a
				>
			</div>
			<div class="w-11/12 sm:w-[48%] h-full bg-green-600 mt-10 p-5 my-0 mx-auto rounded-xl">
				<img
					src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975075/Stefan/email_uax4jw.svg"
					alt="email icon"
					class="flex my-0 mx-auto"
				/>
				<p>{locale[selectedOption]['contact-email-text']}</p>
				<a href="mailto:{locale[selectedOption]['contact-email-address']}"
					>{locale[selectedOption]['contact-email-address']}</a
				>
			</div>
		</div>
		<div class="ns-gradient text-center py-5">
			<div class="mt-10 p-5 my-0 mx-auto">
				<p class="text-2xl">"The Stack, OK?"</p>
				<div class="flex flex-col items-center justify-around pt-2">
					<div class="w-full grid grid-cols-4 pt-4">
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975076/Stefan/vscode_pcrxvn.png"
								class="h-10 w-10"
								alt="vs-code icon"
							/>
							<p class="pt-2">VS Code</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975074/Stefan/html_wugcae.svg"
								class="h-10 w-10"
								alt="html icon"
							/>
							<p class="pt-2">HTML</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975075/Stefan/css_r8ousa.png"
								class="h-10 w-10"
								alt="css icon"
							/>
							<p class="pt-2">CSS</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975075/Stefan/js_g6qbwk.png"
								class="h-10 w-10"
								alt="js icon"
							/>
							<p class="pt-2">JavaScript</p>
						</div>
					</div>
					<div class="w-full grid grid-cols-4 pt-8">
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975075/Stefan/github_gd1y8j.png"
								class="h-10 w-10"
								alt="github icon"
							/>
							<p class="pt-2">GitHub</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975076/Stefan/vite_z2xgiw.png"
								class="h-10 w-10"
								alt="vite icon"
							/>
							<p class="pt-2">Vite</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975076/Stefan/svelte_hmfdkk.png"
								class="h-10 w-10"
								alt="svelte icon"
							/>
							<p class="pt-2">Svelte</p>
						</div>
						<div class="flex flex-col justify-center items-center">
							<img
								src="https://res.cloudinary.com/dz7fcf3qg/image/upload/v1686975076/Stefan/tailwind_wn2acw.svg"
								class="h-10 w-10"
								alt="tailwind icon"
							/>
							<p class="pt-2">TailwindCSS</p>
						</div>
					</div>
					<div class="mt-20 p-5 my-0 mx-auto">
						<h3 class="text-2xl">{locale[selectedOption]['reference-title']}</h3>
						<div class="grid grid-cols-4 grid-rows-4">
							<p>x</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/await}
</div>

<style>
	.ns-gradient {
		background: rgb(42, 34, 195);
		background: linear-gradient(25deg, rgba(42, 34, 195, 0.25) 0%, rgba(49, 253, 45, 0.25) 100%);
	}
</style>
