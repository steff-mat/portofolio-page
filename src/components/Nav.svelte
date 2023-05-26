<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick(page) {
    dispatch('changePage', page);
  }
</script>

<nav>
  <button class="nav_btn" on:click={() => handleClick('Home')}>Home</button>
  <button class="nav_btn" on:click={() => handleClick('Portofolio')}
    >Portofolio</button
  >
  <button class="nav_btn" on:click={() => handleClick('Contact')}
    >Contact</button
  >
</nav>

<style>
  nav {
    width: 1fr;
    max-width: 768px;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }
  .nav_btn {
    font-size: 1.5em;
    width: 10rem;
    height: 2.5rem;
    border: 0;
    transition: all 250ms;
  }

  @media (prefers-color-scheme: light) {
    .nav_btn {
      color: black;
      background-color: #6ecdef;
      box-shadow: 1px 1px 1px 1px #e8449a;
    }
    .nav_btn:hover {
      background-color: #e8449a;
      box-shadow: 1px 1px 1px 1px #6ecdef;
    }
  }
  @media (prefers-color-scheme: dark) {
    .nav_btn {
      background-color: black;
      box-shadow: 1px 1px 1px 1px #6ecdef;
      color: #6ecdef;
    }
    .nav_btn:hover {
      background-color: yellow;
      box-shadow: 1px 1px 1px 1px #6ecdef;
      color: black;
    }
  }
</style>
