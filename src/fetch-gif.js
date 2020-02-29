async function fetchGIF(apiKey, searchTerm) {
  if (!apiKey || !searchTerm) {
    return;
  }
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`;
  const response = await fetch(url);
  const result = await response.json();
  const index = Math.floor((Math.random() * result.data.length) + 1);
  let src = result.data[index].images.original.url;
  console.log("GIPHY API results:", result);
  this.setState({ imageUrl: src });
}

export default fetchGIF;
