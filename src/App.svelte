<script>
  import Home from './components/Home.svelte';
  import Nav from './components/Nav.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  let activePage = 'Home';
  function handleChange(event) {
    activePage = event.detail;
  }
</script>

<Nav on:changePage={handleChange} />

{#if activePage === 'Home'}
  <Home />
  <!-- <Footer /> -->
{:else if activePage === 'Contact'}
  <Contact />
{/if}
