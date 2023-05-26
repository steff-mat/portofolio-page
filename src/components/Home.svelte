<script>
  import ContentBox from './ContentBox.svelte';
  import * as cheerio from 'cheerio';

  let showBlog = false;

  const sheetUrl =
    'https://docs.google.com/spreadsheets/d/1bsScW5hnMQus6CXvMDCcjMQ6q4iBqZINbmD3rekBFnc/edit#gid=0';
  let filteredData = [];

  function fetchPosts() {
    fetch(sheetUrl)
      .then((response) => response.text())
      .then((data) => {
        const $ = cheerio.load(data);
        const rows = $('table tbody tr');
        rows.each((index, row) => {
          const id = $(row).find('td:nth-child(2)').text();
          const headerText = $(row).find('td:nth-child(3)').text();
          const content = $(row).find('td:nth-child(4)').text();
          const description = $(row).find('td:nth-child(5)').text();
          const rawImg = $(row).find('td:nth-child(6)').text();
          let img;
          if (rawImg !== '') {
            const rawImgPre = rawImg
              .split('')
              .splice(32)
              .join('')
              .split('')
              .splice(0, 33)
              .join('');
            img = `https://drive.google.com/uc?export=download&id=${rawImgPre}`;
          }
          filteredData.push({ id, headerText, content, description, img });
        });
        filteredData = filteredData;
        // console.log(filteredData);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  function viewBlog() {
    showBlog = true;
    fetchPosts();
  }
</script>

<ContentBox
  id="welcome"
  headerText="Welcome!"
  content="Latest projects available in Portofolio section, otherwise feel free to check out the blog section below."
  description=""
  img=""
>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 120.64"
    style="enable-background:new 0 0 122.88 120.64"
    xml:space="preserve"
    ><g
      ><path
        d="M108.91,54.03c1.63-1.55,3.74-2.31,5.85-2.28c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.58,2.23,3.6,2.2,5.61 c-0.03,2.01-0.82,4.02-2.37,5.55c-17.66,17.66-35.61,35.13-53.4,52.68c-0.05,0.07-0.1,0.13-0.16,0.19 c-1.63,1.55-3.76,2.31-5.87,2.28c-2.11-0.03-4.21-0.85-5.8-2.45l-0.26-0.27C37.47,100.43,19.87,82.98,2.36,65.46 C0.82,63.93,0.03,61.93,0,59.92c-0.03-2.01,0.7-4.03,2.21-5.61l0.15-0.15c1.58-1.57,3.66-2.38,5.76-2.41 c2.1-0.03,4.22,0.73,5.85,2.28l47.27,47.22L108.91,54.03L108.91,54.03z M106.91,2.26c1.62-1.54,3.73-2.29,5.83-2.26 c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.57,2.23,3.6,2.21,5.61c-0.03,2.01-0.82,4.02-2.37,5.55 C101.2,31.01,84.2,48.87,67.12,66.39c-0.05,0.07-0.11,0.14-0.17,0.21c-1.63,1.55-3.76,2.31-5.87,2.28 c-2.11-0.03-4.21-0.85-5.8-2.45C38.33,48.94,21.44,31.36,4.51,13.83l-0.13-0.12c-1.54-1.53-2.32-3.53-2.35-5.54 C2,6.16,2.73,4.14,4.23,2.56l0.15-0.15C5.96,0.84,8.05,0.03,10.14,0c2.1-0.03,4.22,0.73,5.85,2.28l45.24,47.18L106.91,2.26 L106.91,2.26z"
      /></g
    ></svg
  >
  <button on:click={viewBlog}>View Blog posts</button>
</ContentBox>

{#if showBlog}
  {#each filteredData as item, i}
    {#if filteredData[i].headerText !== '' && i !== filteredData.length - 1}
      <ContentBox {...filteredData[i]} />
    {/if}
  {/each}
{/if}

<style>
  svg {
    width: 10%;
    margin: 0 auto;
    margin-bottom: 1rem;
    animation: moveUpDown 2500ms ease-in-out infinite;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(-10px);
      fill: rgba(25, 25, 25, 0);
    }
    25% {
      transform: translateY(-10px);
      fill: rgba(25, 25, 25, 0);
    }
    50% {
      transform: translateY(10px);
      fill: #6ecdef;
    }
    100% {
      transform: translateY(-10px);
      fill: rgba(25, 25, 25, 0);
    }
  }
  button {
    margin: 0 auto;
    width: 50%;
    height: 2rem;
    border-radius: 25px;
    margin-bottom: 1rem;
  }
  @media (prefers-color-scheme: light) {
    svg {
      fill: #6ecdef;
    }
    button {
      color: black;
      background-color: #6ecdef;
      box-shadow: 1px 1px 1px 1px #e8449a;
    }
    button:hover {
      background-color: #e8449a;
      box-shadow: 1px 1px 1px 1px #6ecdef;
    }
  }
  @media (prefers-color-scheme: dark) {
    svg {
      fill: yellow;
    }
    button {
      background-color: black;
      box-shadow: 1px 1px 1px 1px #6ecdef;
      color: #6ecdef;
    }
    button:hover {
      background-color: yellow;
      box-shadow: 1px 1px 1px 1px #6ecdef;
      color: black;
    }
  }
  /* @media only screen and (min-width: 786px) {
    button {
      width: 25%;
      height: 1.5rem;
      font-size: 1em;
    }
  } */
</style>
