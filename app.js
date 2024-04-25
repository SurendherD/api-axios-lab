// Progression 1: create a function and fetch the api using axios
let arr = [];
function fetchApi() {
  const outer = document.getElementById('outer');
  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&country=in&apikey=edf3ac054c79b00aa8d32ab504a73170'
    )
    .then((res) => {
      const allarticles = res.data.articles;
      console.log(res);
      allarticles.forEach((article) => {
        const createDivForArticle = document.createElement('div');
        createDivForArticle.setAttribute('id', article);
        createDivForArticle.setAttribute('class', article);

        const title = (document.createElement('h2').innerHTML = article.title);
        const content = (document.createElement('p').innerHTML =
          article.content);
        const image = document.createElement('img');
        image.setAttribute('src', article.image);

        createDivForArticle.append(title);
        createDivForArticle.append(content);
        createDivForArticle.append(image);

        arr.push(createDivForArticle);
      });
      arr.forEach((element) => {
        outer.append(element);
      });
    });
}

fetchApi();
