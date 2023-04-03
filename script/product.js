// Declare variables for timer, page number, and selected values
let timerId;
var pageNumber = 1;
let selectedValues = [];

// Define function for navigating to home page with selected values and page number
function home() {
  // Reset selected values
  selectedValues = [];
  // Navigate to home page with updated selected values and page number
  window.parent.location = `index.html?q=&facets=${selectedValues}&page=${pageNumber}`;
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
    data=result["data"];
    
    const dictionary = {};
    for (const property of data.properties) {
    dictionary[property.field_id] = {
        name: property.name,
        group: property.group,
        };
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
            product=result["data"]["response"]["products"][0]
            
            let price = product['field_390']+".00";
            let decimal = (parseFloat(price).toFixed(2)).slice(-2);
            let displayPrice = String(parseInt(price));
            prod_container.innerHTML += `<div class="column1">
                <img class="image" src="${product['productImage']}">
            </div>
            <div class="column2">
                <p class="image_title">${product['productName']}</p>
                <p class="price"><sup id="sup_price">$</sup>${displayPrice}<sup id="sup_price">${decimal}</sup></p>
                <p class="image_body">Quanitity : ${product['field_485']}</p>
                <p > UniqueID : ${product["uniqueId"]}</p>
                <p >Parent ID :${product['parentId']}</p>
                <p >Updated On :${product['updated_at']}</p>
                <p >Product Status :${product['product_status']}</p>   
            </div>

            <div class="column3">
            <p class="image_body">${product['field_476']}</p>
            </div>
            <div class="column4" id="more_info">
            <h4> More Information </h4>
            </div>
            `
            for (const fieldId in dictionary) {
                let more_info=document.getElementById("more_info");
                if(fieldId.includes("field") && product[fieldId]!==undefined){
                    more_info.innerHTML +=`<p class="info">${dictionary[fieldId].name} : ${product[fieldId]}</p>`
                }
            }
            
        })
        .catch(error => console.log('error', error));
  })
  .catch(error => console.log('error', error));
    


    



}