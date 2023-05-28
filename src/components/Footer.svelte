<script>
  import CustomFont from './CustomFont.svelte';
  import CustomStyle from './CustomStyle.svelte';
</script>

<footer>
  <CustomFont />
  <p>Stefan Maties <span> - 2023</span></p>
  <CustomStyle />
</footer>

<style>
  footer {
    color: yellow;
    height: 2rem;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (prefers-color-scheme: light) {
    p {
      color: #6ecdef;
    }
    span {
      color: #e8449a;
    }
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: black;
      color: #6ecdef;
    }
    span {
      color: yellow;
    }
  }
</style>
