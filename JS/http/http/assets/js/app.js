let cl = console.log;

// GET >>  to get data from DataBase
// POST >> to send data to DataBase
// DELETE >> to remove object/instance from DataBase
// PATCH >> to update data partialy in database
// PUT >> to update complete data/object  in databse

// let baseUrl = 'https://jsonplaceholder.typicode.com/posts'; // api
let baseUrl = "https://jsonplaceholder.typicode.com/photos"; // api
const info = document.getElementById("info");
// 1 create instance of XMLHttpRequest
let xhr = new XMLHttpRequest();
// 2 open method
// open method accepts 3 arguments >> 1 Method Name, 2 api url, 3 async = true (bydefault itis true)
xhr.open("GET", baseUrl, true);
// 3 onload
xhr.onload = function () {
  // xhr.status === 200 and xhr.readyState === 4
  if (xhr.status === 200 && xhr.readyState === 4) {
    cl(xhr.response);
    let data = JSON.parse(xhr.response);
    templating(data)
  } else if (xhr.status === 404) {
    cl("Url Not found");
    // throw new Error('URL not found')
  }
};
// 4 send method
xhr.send();

function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
        <div class="col-sm-4">
        <div class="card albumCard mb-4">
            <div class="card-body">
                <figure>
                    <img src="${ele.url}" alt="${ele.title}" class="img-fluid">
                    <figcaption>
                        <p class="m-2">
                            ${ele.title}
                        </p>
                        <span>albumId : ${ele.albumId}</span>
                        <span>ID : ${ele.id}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
        `;
  });
  info.innerHTML = result;
}

// xhr.status >>
// 200 >> http call is successfull
// 404 >> URL not found
// 503 >> service not available
// 403 >> forbidden

// xhr.readyState

// 0 >> Unsend >> xhr object is created  but open method is not called yet
// 1 >> the 'open' method is called
// 2 >> send method is called
// 3 >> loading >> server is loading our request
// 4 >> Done >> Request hac been proccessed and responce is ready
