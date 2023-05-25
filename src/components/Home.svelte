<script>
  import ContentBox from './ContentBox.svelte';

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
        // if (rawImg == '') {
        //   img =
        //     'https://drive.google.com/uc?export=download&id=1q12Svt00-gmkhdLEmTmLW3zprRbxHwaZ';
        // }
        filteredData.push({ id, headerText, content, description, img });
      });
      filteredData = filteredData;
      console.log(filteredData);
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
