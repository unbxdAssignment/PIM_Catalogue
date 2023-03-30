function prevPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let prod_query =urlParams.get('q');
    let pageNumber = parseInt(urlParams.get('page'));
    let filterList = urlParams.get('facets');
    
    pageNumber -= 1;
    if ((pageNumber >= 1)){
        window.parent.location = `index.html?q=${prod_query}&facets=${filterList}&page=${pageNumber}`
    }
}

function nextPage(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let prod_query = urlParams.get('q');    
    let pageNumber = parseInt(urlParams.get('page'));
    let filterList = urlParams.get('facets');
    let numberOfProducts=parseInt(document.getElementById("page-num").value)
    console.log(numberOfProducts)
    if(pageNumber < Math.ceil(numberOfProducts/20)){
        pageNumber += 1;
        if ((pageNumber >= -1000)&&(prod_query!==null)){
            window.parent.location = `index.html?q=${prod_query}&facets=${filterList}&page=${pageNumber}`
        }
    }

    
    
    
}