<script>
  export let id;
  export let headerText;
  export let content;
  export let description;
  export let img;
</script>

<div {id} class="holder">
  <div class="header_holder">
    <h1 class="header">{headerText}</h1>
    <p class="text">{content}</p>
  </div>
  <div style="display: flex; flex-direction:column; align-items:center">
    <p class="description">{description}</p>
    <img class="img" src={img} alt={description} />
  </div>
</div>

<style>
  .holder {
    width: 80%;
    max-width: 768px;
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
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .description {
    font-style: italic;
    text-decoration: underline;
  }
  .img {
    width: 90%;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    .holder {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .header {
      color: #e8449a;
      text-shadow: 0px 0px 5px #e8449a;
    }
    p {
      color: #6ecdef;
      text-shadow: 0px 0px 2px #6ecdef;
    }
  }
  @media (prefers-color-scheme: light) {
    .holder {
      background-color: rgba(0, 0, 0, 0.95);
    }
    .header {
      color: yellow;
      text-shadow: 0px 0px 5px yellow;
    }
    p {
      color: yellow;
      text-shadow: 0px 0px 2px yellow;
    }
  }
</style>
