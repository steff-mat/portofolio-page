<script>
  export let selectedValue;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleChange(e) {
    const { value } = e.target;
    dispatch('valueSelected', value);
  }
  // $: postType= {
  //   All:
  // }
</script>

<!-- HTML -->
<div class="filter-box">
  <p>Filter by:</p>
  <select
    name="post_type"
    id="post_type"
    bind:value={selectedValue}
    on:change={handleChange}
  >
    <option value="all">All</option>
    <option value="Article">Article</option>
    <option value="Project ">Project</option>
    <option value="News">News</option>
  </select>
</div>

<!-- HTML -->

<style>
  .filter-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  select {
    border: none;
    background-color: transparent;
    color: white;
    font-family: 'VCR_OSD', Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
    text-align: center;
  }
  option {
    color: white;
    background-color: black;
    border: none;
    text-align: center;
  }
  p {
    color: white;
  }
</style>
