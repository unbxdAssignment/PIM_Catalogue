let timerId;
var pageNumber = 1;
let selectedValues = [];


function debounceSearch() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      const { value: searchQuery = '' } = document.getElementById("query") || {};
      selectedValues = [];
      window.parent.location=`index.html?q=${searchQuery}&facets=${selectedValues}&page=${pageNumber}`;
    }, 300); // add a delay of 1500 milliseconds
  }


function home() {
  selectedValues = [];
  localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
  window.parent.location = `index.html?q=&facets=${selectedValues}&page=${pageNumber}`;
}

function safeTraverse(obj, paths = []) {
    let val = obj;
    let idx = 0;

    while (idx < paths.length) {
        if (!val) {
            return null;
        }
        val = val[paths[idx]];
        idx++;
    }
    return val === 0 ? '0' : val;
}



window.onload = function () {

    const queryString = window.location.search; // get the query string from the current URL
    const urlParams = new URLSearchParams(queryString); // create a new URLSearchParams object from the query string
    let prod_query = urlParams.get('uid'); // get the value of the 'uid' parameter from the URL and store it in a variable called prod_query.

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
    "catalogue_id": "6391b1448f93e67002742cef",
    "unique_id": prod_query
    });

    var requestOptions01 = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://pim.unbxd.io/api/v1/catalogueConfig/6391b1448f93e67002742cef", requestOptions01)
  .then(response => response.json())
  .then(result => {

    let data =result["data"] || {};

    const dictionary = {};
    const relatedFields = {};

    for (const property of data.properties) {
        dictionary[property.field_id] = {
            name: property.name,
            group: property.group,
        };
            
        const propertyName = property.group

        if (relatedFields[propertyName]) {
            relatedFields[propertyName].push(property.field_id);
        } else {
            relatedFields[propertyName] = [property.field_id];
        }
    }


    var requestOptions02 = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        fetch("https://pim.unbxd.io/peppercorn/api/v2/catalogueProduct", requestOptions02)
        .then(response => response.json())
        .then(result => {

            let prod_container = document.getElementById("row");
            product = safeTraverse(result, ['data', 'response', 'products', '0']) || {};
            
            let price = product['field_390']+".00" || "";
            let decimal = (parseFloat(price).toFixed(2)).slice(-2) || "";
            let displayPrice = String(parseInt(price)) || "";

            prod_container.innerHTML += `
            <div class="col1">
                <img class="image" src="${product['productImage']}">
            </div>
            <div class="col2">
                <hr class="pdpBreaker" >
                <p class="product-title">${product['productName']}</p>
                <hr class="pdpBreaker" >
                <p class="info">Price : &#8377;${displayPrice}.${decimal}</sup></p>
                <hr>
                <p class="info">Quanitity : ${product['field_485']}</p>
                <hr>
                <p class="info">UniqueID : ${product["uniqueId"]}</p>
                <hr>
                <p class="info">Parent ID : ${product['parentId']}</p>
                <hr>
                <p class="info">Updated On : ${product['updated_at']}</p>
                <hr>
                <p class="info">Product Status : ${product['product_status']}</p>   
                <hr class="pdpBreaker" >
            </div>

            <div class="col3">
            <p class="column-heading">Description</p>
            <hr class="pdpBreaker">
            <p class="image_body">${product['field_476']}</p>
            </div>
            <div class="col4" id="more_info">
            <p class="column-heading">More Information</p>
            
            </div>
            `

            for (let groupName in relatedFields ){
                
                const groupFields = relatedFields[groupName];

                if (groupName === 'Properties without any group'){
                    groupName = "Other Details"
                }
                let count=0 
                let more_info=document.getElementById("more_info");

                more_info.innerHTML +=`<hr class="pdpBreaker"><p class="column-heading-inner">${groupName}</p>`
                
                console.log(groupFields)

                for (const fieldId of groupFields) {
                    
                    if(fieldId.includes("field") && product[fieldId]!==undefined && fieldId!="field_476"){
                        more_info.innerHTML +=`<p class="info">${dictionary[fieldId].name} : ${product[fieldId]}</p>`
                        count++;
                        
                    }
                    else if(product[fieldId]!==undefined && fieldId!="field_476"){
                        more_info.innerHTML +=`<p class="info">${fieldId} : ${product[fieldId]}</p>`
                        count++
                    }
                    
                }
                if(count==0){
                    more_info.innerHTML +=`<p class="info">No properties in this group</p>`
                }
            }
            
        })
        .catch(error => {
            alert('An error has occurred: ' + error.message);
          });
  })
  .catch(error => {
    alert('An error has occurred: ' + error.message);
  });
}