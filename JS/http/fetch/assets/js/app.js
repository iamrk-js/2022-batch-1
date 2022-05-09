let cl = console.log;

let baseUrl = "http://localhost:3000/posts";
const data = document.getElementById("data");
const postsForm = document.getElementById("postsForm");
const title = document.getElementById("title");
const info = document.getElementById("info");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

let postArray = [];
function makeAPIcall(methodName, url, body) {
  return fetch(url, {
    method: methodName,
    body: body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authrazation: "Bearer Token qwertyuiop",
    },
  }).then((res) => res.json()); // it also returns Promise
}

async function getPosts() {
  try {
    let responseData = await makeAPIcall("GET", baseUrl);
    postArray = responseData;
    templating(postArray);
  } catch (err) {
    cl(err);
  }
}
const onEditHandler = (ele) => {
  let getId = +ele.dataset.id;
  localStorage.setItem("setId", getId);
  cl(getId);
  // let getObj = postArray.filter(obj => {
  //   return obj.id == getId
  // })
  let getObj = postArray.find((obj) => obj.id == getId);
  title.value = getObj.title;
  info.value = getObj.body;
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
};
const onDeleteHandler = (ele) => {
  // let getId = ele.getAttribute('data-id');
  let getId = ele.dataset.id;
  cl(getId);
  let deleteUrl = `${baseUrl}/${getId}`;
  try {
    makeAPIcall("DELETE", deleteUrl);
  } catch (err) {
    cl(err);
  }
};
const onUpdateHandler = (ele) => {
  let getId = localStorage.getItem("setId");
  let updateUrl = `${baseUrl}/${getId}`;
  let updateObj = {
    title: title.value,
    body: info.value,
  };
  try {
    makeAPIcall("PATCH", updateUrl, JSON.stringify(updateObj));
  } catch (err) {
    cl(err);
  }
};
getPosts();
function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
        <div class="card">
        <div class="card-body">
            <h3>
                ${ele.title}
            </h3>
            <p>
                ${ele.body}
            </p>
            <p class="text-right">
                <button class="btn btn-success" data-id="${ele.id}" onclick="onEditHandler(this)">Edit</button>
                <button class="btn btn-danger" data-id="${ele.id}" onclick="onDeleteHandler(this)">Delete</button>
            </p>
        </div>
    </div>

        `;
  });
  data.innerHTML = result;
}

async function onSubmitHandler(e) {
  e.preventDefault();
  let obj = {
    userId: "" + Math.ceil(Math.random() * 10),
    title: title.value,
    body: info.value,
  };
  postArray.push(obj);
  postsForm.reset();
  try {
    let responseData = await makeAPIcall("POST", baseUrl, JSON.stringify(obj));
  } catch (err) {
    cl(err);
  }
  // fetch(baseUrl, {
  //   method: "POST",
  //   body: JSON.stringify(obj),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     'authrazation': "Bearer Token qwertyuiop",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => cl(data))
  //   .catch((data) => cl(data));
}

postsForm.addEventListener("submit", onSubmitHandler);
updateBtn.addEventListener("click", onUpdateHandler);
