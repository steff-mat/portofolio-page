<script>
  import Home from './components/Home.svelte';
  import Nav from './components/Nav.svelte';
  import Portofolio from './components/Portofolio.svelte';
  import Contact from './components/Contact.svelte';
  import { onMount } from 'svelte';

  let activePage = 'Home'; // Initial active page
  function handleChange(event) {
    activePage = event.detail;
    console.log(activePage);
  }
</script>

<Nav on:changePage={handleChange} />
{#if activePage === 'Home'}
  <Home />
{:else if activePage === 'Portofolio'}
  <Portofolio />
{:else if activePage === 'Contact'}
  <Contact />
{/if}
