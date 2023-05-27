<script>
  import { fade, fly } from 'svelte/transition';

  export let id;
  export let category;
  export let headerText;
  export let content;
  export let description;
  export let img;
</script>

<div
  {id}
  class="holder {category.toLowerCase()}"
  in:fly={{ y: 200, duration: 2000 }}
  out:fade
>
  <div class="header_holder" in:fade out:fade>
    <h1 class="header" in:fade out:fade>{headerText}</h1>
    <p class="text" in:fade out:fade>{@html content}</p>
  </div>
  <div
    style="display: flex; flex-direction:column; align-items:center;"
    in:fade
    out:fade
  >
    <p class="description" in:fade out:fade>{description}</p>
    <img class="img" src={img} alt={description} in:fade out:fade />
    {#if category !== ''}
      <p class="category" in:fade out:fade><span>Category:</span> {category}</p>
    {/if}
  </div>
  <slot />
</div>

<style>
  .holder {
    width: 80%;
    max-width: 480px;
    min-height: 5rem;
    border-radius: 25px;
    margin: 2.5rem auto;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .header {
    text-decoration: underline;
  }
  .header,
  .text {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .description,
  .category {
    font-style: italic;
    text-decoration: underline;
    color: yellow;
    text-shadow: 0px 0px 2px yellow;
  }
  .img {
    width: 90%;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  @media (prefers-color-scheme: light) {
    .holder {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 2px 2px 5px #e8449a;
    }
    .header,
    .category {
      color: #e8449a;
      text-shadow: 0px 0px 5px #e8449a;
    }
    .text,
    p span {
      color: yellow;
      text-shadow: 0px 0px 2px yellow;
    }
  }
  @media (prefers-color-scheme: dark) {
    .holder {
      background-color: rgba(25, 25, 25, 0.5);
      box-shadow: 2px 2px 5px #6ecdef;
    }
    .header,
    .category {
      color: yellow;
      text-shadow: 0px 0px 5px yellow;
    }
    .text,
    p span {
      color: #6ecdef;
      text-shadow: 0px 0px 2px #6ecdef;
    }
  }
</style>
