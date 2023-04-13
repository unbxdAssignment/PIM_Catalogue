function prevPage () {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let prod_query = urlParams.get('q') || '';
  let pageNumber = parseInt(urlParams.get('page')) || 1;
  let filterList = urlParams.get('facets') || '';
  let catID = urlParams.get("catalogId") || "";

  pageNumber -= 1

  if (pageNumber >= 1) {
    window.parent.location = `index.html?catalogId=${catID}&q=${prod_query}&facets=${filterList}&page=${pageNumber}`;
  }

}

function nextPage () {

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);

  let prod_query = urlParams.get('q') || '';
  let pageNumber = parseInt(urlParams.get('page')) || 1;
  let filterList = urlParams.get('facets') || '';

  let catID = urlParams.get("catalogId") || "";

  let numberOfProducts = parseInt(document.getElementById('page-num').value)

  console.log(numberOfProducts)

  if (pageNumber < Math.ceil(numberOfProducts / 20)) {
    pageNumber += 1;
    if (pageNumber >= -1000 && prod_query !== null) {
      window.parent.location = `index.html?catalogId=${catID}&q=${prod_query}&facets=${filterList}&page=${pageNumber}`;
    }
  }
}
