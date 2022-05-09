let cl = console.log;
// CRUD
let baseUrl = "https://jsonplaceholder.typicode.com/posts"; // api
const data = document.getElementById("data");
const postsForm = document.getElementById("postsForm");
const title = document.getElementById("title");
const info = document.getElementById("info");
const updateBtn = document.getElementById("updateBtn");
const submitBtn = document.getElementById("submitBtn");

let postsArray = [];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function makeHttpRequest(method, url, body) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function () {
      if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject("Something Went Wrong");
      }
    };
    xhr.send(body);
  });
}

// makeHttpRequest("GET", baseUrl)
//   .then((res) => {
//     let data = JSON.parse(res);
//     templating(data);
//   })
//   .catch((err) => cl(err));

makeHttpRequest("GET", baseUrl)
  .then((res) => {
    postsArray = JSON.parse(res);
    templating(postsArray);
  })
  // .then(templating)
  //   .catch((err) => cl(err));
  .catch(cl);
const onEditHandler = (ele) => {
  let getId = +ele.getAttribute("data-id");
  // cl(getId);
  localStorage.setItem('setId', getId);
  let getObj = postsArray.filter((obj) =>  obj.id === getId);
  // let getObj = postsArray.find((obj) => obj.id === getId);
  cl(getObj);
  title.value = getObj[0].title;
  info.value = getObj[0].body;
  submitBtn.classList.add('d-none');
  updateBtn.classList.remove('d-none');
};
const onDeleteHandler = (ele) => {
  let getId = +ele.getAttribute("data-id");
  cl(getId);
  let deleteUrl = `${baseUrl}/${getId}`;
  let updatedData = postsArray.filter(obj =>  obj.id != getId);
  templating(updatedData)
  makeHttpRequest('DELETE', deleteUrl);
};
function templating(arr) {
  // arr = JSON.parse(arr);
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
                <button class="btn btn-success" data-id="${ele.id}" onclick="onEditHandler(this)">Edit</button>
                <button class="btn btn-danger"  data-id="${ele.id}" onclick="onDeleteHandler(this)">Delete</button>
            </p>
        </div>
    </div>
        `;
  });
  data.innerHTML = result;
}
const onUpdateHandler = (eve) => {
  let obj = {
    title: title.value,
    body: info.value
  };
  let updateId =   +localStorage.getItem('setId');
  cl(obj, updateId)
  postsArray.forEach(ele => {
    if(ele.id === updateId){
      ele.title = title.value;
      ele.body = info.value
    }
  })
  templating(postsArray);
  let updateUrl = `${baseUrl}/${updateId}`;
  updateBtn.classList.add('d-none');
  submitBtn.classList.remove('d-none');
  postsForm.reset();
  makeHttpRequest('PATCH', updateUrl, JSON.stringify(obj))
}
let onPostHandler = (eve) => {
  eve.preventDefault();
  let obj = {
    title: title.value,
    body: info.value,
    userId: Math.ceil(Math.random() * 10),
    id: uuidv4(),
  };
  postsArray.push(obj);
  cl(obj);
  templating(postsArray);
  postsForm.reset();
  makeHttpRequest("POST", baseUrl, JSON.stringify(obj));
};

updateBtn.addEventListener("click", onUpdateHandler);
postsForm.addEventListener("submit", onPostHandler);
