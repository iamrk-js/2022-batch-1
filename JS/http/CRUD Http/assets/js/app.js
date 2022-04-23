let cl = console.log;
// CRUD
let baseUrl = "https://jsonplaceholder.typicode.com/posts"; // api
const data = document.getElementById("data");
const postsForm = document.getElementById("postsForm");
const title = document.getElementById("title");
const info = document.getElementById("info");

let postsArray = [];
function makeHttpRequest(method, url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject("Something Went Wrong");
      }
    };
    xhr.send();
  });
}

// makeHttpRequest("GET", baseUrl)
//   .then((res) => {
//     let data = JSON.parse(res);
//     templating(data);
//   })
//   .catch((err) => cl(err));

makeHttpRequest("GET", baseUrl)
//   .then(res => templating(JSON.parse(res)))
  .then(templating)
//   .catch((err) => cl(err));
  .catch(cl);

function templating(arr) {
    arr = JSON.parse(arr);
  let result = "";
  arr.forEach((ele) => {
    result += `
    <div class="card mb-4">
        <div class="card-body">
            <h3>${ele.title}</h3>
            <p>
                ${ele.body}
            </p>
            <p class="text-right">
                <button class="btn btn-success">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </p>
        </div>
    </div>
        `;
  });
  data.innerHTML = result;
}

let onPostHandler = (eve) => {
  eve.preventDefault();
  let obj = {
    title: title.value,
    body: info.value,
  };
  postsArray.push(obj);
  cl(obj);
  templating(postsArray);
};

postsForm.addEventListener("submit", onPostHandler);
