let timerId;
var pageNumber=1;
let selectedValues = localStorage.getItem('selectedValues') ? JSON.parse(localStorage.getItem('selectedValues')) : []; // load selectedValues from localStorage, or initialize as empty array



function debounceSearch() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    const { value: searchQuery = '' } = document.getElementById("query") || {};
    let catID = urlParams.get("catalogId") || "";
    selectedValues = [];
    window.parent.location=`index.html?catalogId=${catID}&q=${searchQuery}&facets=${selectedValues}&page=${pageNumber}`;
  }, 500); // add a delay of 1500 milliseconds
}

function reset(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  selectedValues = [];
  const { value: searchQuery = '' } = document.getElementById("query") || {};
  let catID = urlParams.get("catalogId") || "";
  localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
  window.parent.location=`index.html?catalogId=${catID}&q=${searchQuery}&facets=${selectedValues}&page=${pageNumber}`;
}
function home(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  selectedValues = [];
  localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
  let catID = urlParams.get("catalogId") || "";
  window.parent.location=`index.html?catalogId=${catID}&q=&facets=${selectedValues}&page=${pageNumber}`;
  
}

function resetFilters(){

  let reset = document.getElementById("reset");
  reset.innerHTML += `<button type="button" class="button-reset" onclick=reset()>Reset</button>
  <hr class = "facet-list"></hr>`
}


function applyFilter(value,facetId) {
  const filterString = `${facetId}:"${value}"`;
  const index = selectedValues.indexOf(filterString);
  if (index === -1) {
    selectedValues.push(filterString);
  } else {
    selectedValues.splice(index, 1);
  }
  const { value: searchQuery = '' } = document.getElementById("query") || {};
  let catID = urlParams.get("catalogId") || "";
  clearTimeout(timerId);
  timerId = setTimeout(() => {
  window.parent.location=`index.html?catalogId=${catID}&q=${searchQuery}&facets=${selectedValues}&page=${pageNumber}`;
  localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
  }, 1000);
  
}
function setLogo(logo){
  
  if(logo === null){
    logo = './images/unbxd-logo.png'
  }
  let logo_field = document.getElementById("logo");
  console.log(logo);
  logo_field.setAttribute("src", logo);
}

const urlParams = new URLSearchParams(window.location.search);
let searchQuery  = urlParams.get("q") || "";

// Set the initial value of the search input field to the search query parameter
if (searchQuery) {
  document.getElementById("query").value = searchQuery;
}


window.onload = function () {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let prod_query = urlParams.get('q') || "";
  let pageNumber = urlParams.get('page') || 1;
  let filterList= urlParams.get('facets') || "";
  let catID = urlParams.get('catalogId') || "6391b1448f93e67002742cef";
  

  
  let filterArray = filterList.split(",");
  console.log(filterArray)
  
  let mySpan = document.getElementById("page-num");
  mySpan.textContent = pageNumber;
  var myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "ajs_user_id=sivanv@unbxd.com; _ga=GA1.2.44711214.1628009891; fs_cid=1.0; fs_uid=#BCTWS#5827173059792896:5552003249360896:::#89e388a9#/1687244231; intercom-device-id-uksd1f47=65dacc19-cc8f-4a38-9280-d7f1930483b8; ajs_user_id=sivanv@unbxd.com; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; _gid=GA1.2.1181530657.1679289145; _un_sso_uid=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjpudWxsLCJleHBpcnkiOiIyMDIzLTAzLTI4IDA0OjE4OjMwIFVUQyIsImVtYWlsIjoic2l2YW52QHVuYnhkLmNvbSIsInJlZ2lvbnMiOnsidXMiOnsicmVmX3VzZXJfaWQiOjcwMjUxfSwic2ciOnsicmVmX3VzZXJfaWQiOjM4OX0sInVrIjp7InJlZl91c2VyX2lkIjoyNTl9LCJhdSI6eyJyZWZfdXNlcl9pZCI6MjYyfSwidXNfZ2NwIjp7InJlZl91c2VyX2lkIjoyNjZ9fX0.HjcmYCYF2_Jni6WGoGkMqdirdsjGZI15EiDlCNJRp50; _un_csrf=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNpdmFudkB1bmJ4ZC5jb20iLCJleHBpcnkiOiIyMDIzLTAzLTMxIDA0OjE4OjMwIFVUQyIsInVzZXJfaWQiOiI1ZDA5ZGUyOWIxZDI1MDAwMjNiOTc1MmIiLCJ0aW1lc3RhbXAiOiIyMDIzLTAzLTIxVDA0OjE4OjMwLjc4OVoifQ.afdTOWa8_r12If2N-9ZkK7Wd0ydjQRvm0vM280rMN_w; mp_4d8b093383efd0132a7afde806127f49_mixpanel=%7B%22distinct_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22%24device_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; connect.sid=s%3ArfsVqhM8NaF8eDe-O0xZ-GCC-BxSNgO7.AeW2wRDrJUNK891rbKv15DAcFiiWaXHoqv5O0fWxj80; ajs_group_id=8542a739d0b398ee28a5b32c351e45e1; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; intercom-session-uksd1f47=TkJHUVZxN3pPMVJySWk4RGtkWHhZcXltNFd5Y0JkRHhFMngwYUJrdGd1N2FjRngrUURPbEthanQ1MmpGdWMweC0takNYY29GaHhrd0lidTRsUWNEU3NXUT09--831f39c58176f7b8a7d643f6e9eb71ccc544b2a6; JSESSIONID=o5s6-GZRx9jj4DTZ430OHTjfwx3OftI7RsDWLOyh");
  myHeaders.append("Origin", "https://pim.unbxd.io");
  myHeaders.append("Referer", "https://pim.unbxd.io/catalogueView/");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36");
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"macOS\"");

  var raw = JSON.stringify({
    "page": pageNumber,
    "count": 20,
    "facet_filters": filterArray,
    "search_str": prod_query
  });
  

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  

  fetch(`https://pim.unbxd.io/peppercorn/api/v2/catalogueView/${catID}`, requestOptions)
    .then(response => response.json())
    .then(result => {
              // let prod_container = document.getElementById("outer-div");
              let grids = document.getElementById("grid-row");
              grids.innerHTML = "";
              // prod_container.innerHTML = "";
              let filter = document.getElementById("sidebar");
              const {response: { products: product = [] }={} } = result
              
              console.log(product)
              const {response:{numberOfProducts : numberOfProducts=0 }={}} = result

              if(filterList!=""){
                resetFilters()
              }
              filter.innerHTML +=`<p class ="facet-header">Showing results for <b class="prod-count">${numberOfProducts}</b> products...`
              document.getElementById("page-num").value = numberOfProducts;

              if(numberOfProducts<21){
                document.getElementById("pagination").style.display="none";
                document.getElementById("ftr").style.display="none";
              }
              
              for (let i = 0; i < product.length; i++) {
                  product[i]['productImage'] = product[i]['productImage'] || ['images/coming-soon.webp'];
                  if(product[i]['productImage'].length > 1){
                    grids.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 catalog-grid"  onclick="window.open('product.html?catalogId=${catID}&uid=${product[i]['uniqueId']}','_blank')">
                    <div class="products-card">
                    <img class="image img-thumbnail" src="${product[i]['productImage'][0] ? product[i]['productImage'][0] : 'images/coming-soon.webp'}">
                    <p class="price">${product[i]['uniqueId']}</p>
                    <p class="image_text">${product[i]['productName']}</p>
                    </div>
                    </div>`
                  }
                  else{
                    grids.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 catalog-grid"  onclick="window.open('product.html?catalogId=${catID}&uid=${product[i]['uniqueId']}','_blank')">
                    <div class="products-card">
                    <img class="image img-thumbnail" src="${product[i]['productImage'] ? product[i]['productImage'] : 'images/coming-soon.webp'}">
                    <div class="product-details">
                      <p class="price">${product[i]['uniqueId']}</p>
                      <p class="image_text">${product[i]['productName']}</p>
                    </div>`

                  }
                  
                }
             
              const facetIds = Object.keys(result.facets ?? {});
              // const facetIds = Object.keys(result.facets);
              // console.log(facetIds.length)
              for (const facetId of facetIds) {
                const { displayName } = result.facets[facetId];
                const {values} = result.facets[facetId];
                if(values.length>0){
                  filter.innerHTML += `
                  <hr class = "facets-line">
                  <h6 class="facet-header">${displayName}</h6>
                  <ul>
                `;
                for (let i = 0; i < values.length; i += 2) {
                  const isChecked = filterArray.includes(`${facetId}:"${values[i]}"`);
                  filter.innerHTML += `
                    <li class="facet-list">
                      <label >
                        <input class ="checkbox"type="checkbox" id="filter-checkbox" name="${values[i]}" value="${values[i]}" onclick="applyFilter('${values[i]}','${facetId}')" ${isChecked ? 'checked' : ''}>
                        ${values[i]} (${values[i + 1]})
                      </label>
                    </li>
                  `;
                }

                }
                
              }
          })
          .catch(error => {
            alert('An error has occurred 1 : ' + error.message);
          });

          var raw1 = JSON.stringify({
            "catalogue_id": catID,
            "unique_id": prod_query
            });
        
          var requestOptions01 = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
          };
            fetch(`https://pim.unbxd.io/api/v1/catalogueConfig/${catID}`, requestOptions01)
          .then(response => response.json())
          .then(result => {
            let data =result["data"] || {};
            setLogo(data.catalog_logo_url)


          })
          .catch(error => {
            alert('An error has occurred 2 : ' + error.message);
          });
      
          
        }




