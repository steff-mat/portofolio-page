<script>
  export let id;
  export let headerText;
  export let content;
</script>

<div {id}>
  <h1>{headerText}</h1>
  <p>{content}</p>
</div>

<style>
  div {
    width: 80%;
    max-width: 768px;
    min-height: 5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 2.5rem;
    border-radius: 25px;
  }
  h1,
  p {
    padding: 1rem;
  }
  h1 {
    color: #e8449a;
    text-shadow: 0px 0px 5px #e8449a;
  }
  p {
    color: #6ecdef;
    text-shadow: 0px 0px 2px #6ecdef;
  }
</style>
