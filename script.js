fetch('https://market.ote-cr.cz/KSX/rest/market/vdp/summary')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming "bidPrice" is a top-level property in the JSON
    console.log('bidPrice:', data.bidPrice);

    // If it's nested somewhere, you'd access it like data.someKey.bidPrice
  })
  .catch(error => {
    console.error('Error fetching or parsing data:', error);
  });
