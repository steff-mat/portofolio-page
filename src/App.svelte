<script>
  import Home from './components/Home.svelte';
  import Nav from './components/Nav.svelte';
  import Portofolio from './components/Portofolio.svelte';
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
{:else if activePage === 'Portofolio'}
  <Portofolio />
{:else if activePage === 'Contact'}
  <Contact />
{/if}
<Footer />
