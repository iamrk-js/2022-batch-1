let cl = console.log;
// angular developer >> HR
// Tech Interview >>
// Got Angular developer
function getingDeveloper(stack) {
  return new Promise((resolve, reject) => {
    if (stack.toLowerCase() === "angular") {
      resolve("Getting Angular developer very soon !!!");
    } else {
      reject("As of now We are only looking for Angular developer");
    }
  });
}
function proccesingInterview(msg) {
  return new Promise((resolve, reject) => {
    let isSelected = false;
    if (isSelected === true) {
      resolve(`Yes we are ${msg}`);
    } else {
      reject(`No we are not ${msg}`);
    }
  });
}
getingDeveloper("Angular")
  .then((res) => {
    return proccesingInterview(res);
  })
  .then(res => cl(res))
  .catch((err) => cl(err));

// getingDeveloper("reactjs")
//   .then((res) => {
//     cl(res);
//   })
//   .catch((err) => cl(err));
