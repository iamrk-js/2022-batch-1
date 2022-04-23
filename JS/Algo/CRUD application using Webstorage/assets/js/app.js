let cl = console.log;

// CRUD
// Create >> Success
// Read >> Success
// Update >> Success
// Delete >> Success

const stdInfoForm = document.getElementById("stdInfoForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const stdData = document.getElementById("stdData");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

let stdArray = [];
if (localStorage.getItem("setStdInfo")) {
  stdArray = JSON.parse(localStorage.getItem("setStdInfo"));
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function templating(arr) {
  let result = "";
  arr.forEach((ele, i) => {
    result += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${ele.getFname}</td>
                    <td>${ele.getLname}</td>
                    <td>${ele.getEmail}</td>
                    <td>${ele.getContact}</td>
                    <td>
                        <button class="btn btn-success" data-id="${
                          ele.id
                        }" onclick="onEditHandler(this)">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" data-id="${
                          ele.id
                        }"  onclick="onDeleteHandler(this)">Delete</button>
                    </td>
                </tr>
        `;
  });
  stdData.innerHTML = result;
}

templating(stdArray);

const onStdentSubmit = (eve) => {
  eve.preventDefault();
  //   cl(eve);
  let obj = {
    getFname: fname.value,
    getLname: lname.value,
    getEmail: email.value,
    getContact: contact.value,
    id: uuidv4(),
  };
  cl(obj);
  stdArray.push(obj);
  // localStorage.setItem("setStdInfo", JSON.stringify(stdArray));
  setLocalData(stdArray)
  stdInfoForm.reset();
  templating(stdArray);
};
// let getId
const onEditHandler = (ele) => {
  // cl(ele.getAttribute('data-id'));
  updateBtn.classList.remove("d-none");
  submitBtn.classList.add("d-none");
  let getId = ele.getAttribute("data-id");
  localStorage.setItem("setId", getId);
  let getData = getLocalData();
  // cl(getData);
  let getObj = getData.filter(ele =>  ele.id === getId);
  cl(getObj);
  fname.value = getObj[0].getFname;
  lname.value = getObj[0].getLname;
  email.value = getObj[0].getEmail;
  contact.value = getObj[0].getContact;
};

const onDeleteHandler = (ele) => {
  // cl("Deleted !!!");
  let getId = ele.getAttribute('data-id');
  cl(getId);
  let getData = getLocalData();
  let newData = getData.filter(ele =>  ele.id != getId)
  // localStorage.setItem('setStdInfo', JSON.stringify(newData));
  setLocalData(newData);
  templating(newData);
};
const onUpdateHandler = (eve) => {
  cl(eve.target);
  let getId = localStorage.getItem("setId");
  cl(getId);
  let getData = getLocalData();

  getData.forEach((ele) => {
    if (ele.id === getId) {
      ele.getFname = fname.value;
      ele.getLname = lname.value;
      ele.getEmail = email.value;
      ele.getContact = contact.value;
    }
  });
  // localStorage.setItem('setStdInfo', JSON.stringify(getData));
  setLocalData(getData)
  templating(getData);
  updateBtn.classList.add("d-none");
  submitBtn.classList.remove("d-none");
  stdInfoForm.reset()
};

function getLocalData(){
  return JSON.parse(localStorage.getItem("setStdInfo"));
}
function setLocalData(arr){
  localStorage.setItem('setStdInfo', JSON.stringify(arr))
}
stdInfoForm.addEventListener("submit", onStdentSubmit);
updateBtn.addEventListener("click", onUpdateHandler);
