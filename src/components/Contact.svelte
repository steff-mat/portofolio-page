<div>
  <h1>Contact details</h1>
  <p>Email: <span>info@maties.dev</span></p>
</div>

<style>
  div {
    background-color: rgba(28, 80, 192, 0);
    animation: changeColor 1s ease-in-out forwards;
    display: flex;
    flex-direction: column;
    align-items: left;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 480px;
    min-height: 5rem;
    border-radius: 25px;
  }
  h1,
  p {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @keyframes changeColor {
    0% {
    }
    100% {
    }
  }

  @media (prefers-color-scheme: light) {
    div {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 2px 2px 5px #e8449a;
    }
    div {
      color: #e8449a;
      text-shadow: 0px 0px 5px #e8449a;
    }
    p span {
      color: yellow;
      text-shadow: 0px 0px 2px yellow;
    }
  }
  @media (prefers-color-scheme: dark) {
    div {
      background-color: rgba(25, 25, 25, 0.5);
      box-shadow: 2px 2px 5px #6ecdef;
    }
    div {
      color: yellow;
      text-shadow: 0px 0px 5px yellow;
    }
    p span {
      color: #6ecdef;
      text-shadow: 0px 0px 2px #6ecdef;
    }
  }
</style>
