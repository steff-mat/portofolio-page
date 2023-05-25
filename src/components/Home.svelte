<script>
  import ContentBox from './ContentBox.svelte';
  import { data } from './data';

  import * as cheerio from 'cheerio';

  const sheetUrl =
    'https://docs.google.com/spreadsheets/d/1bsScW5hnMQus6CXvMDCcjMQ6q4iBqZINbmD3rekBFnc/edit#gid=0';
  let filteredData = [];
  fetch(sheetUrl)
    .then((response) => response.text())
    .then((data) => {
      const $ = cheerio.load(data);
      const rows = $('table tbody tr');
      rows.each((index, row) => {
        const id = $(row).find('td:nth-child(2)').text();
        const headerText = $(row).find('td:nth-child(3)').text();
        const content = $(row).find('td:nth-child(4)').text();
        filteredData.push({ id, headerText, content });
      });
      console.log(filteredData);
      filteredData = filteredData;
    })
    .catch((error) => {
      console.log('Error:', error);
    });
</script>

{#each filteredData as item, i}
  {#if filteredData[i].headerText !== '' && i !== filteredData.length - 1}
    <ContentBox {...filteredData[i]} />
  {/if}
{/each}
