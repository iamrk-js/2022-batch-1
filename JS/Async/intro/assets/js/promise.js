let cl = console.log;
// Promise >> It is a javaScript Object, It gives some value in a future.
// It used to handle asyncronous oprations

// pending >> it is still pending, not fullfiled or rejectd yet
// fullfilled >> Action related promise is succeded
// rejected >> Action related promise is failed
// settled >> fullfilled or rejected

// Benifits of Promise
// 1 Improves Code Readability
// 2 Better handlaing of asyncronous oprations
// 3 Better Error Handaling
// 4 Better Flow of control defintion

// let promise1 = new Promise((resolve, reject) => {
//     let error = true;
//     if(!error){
//         resolve('Data is Loaded !!!');
//     }else{
//         reject('Something Went Wrong !!!');
//     }
//     // let error = true;
//     // if(error){
//     //     reject("Something Went Wrong !!!");
//     // }else{
//     //     resolve('Data is Loaded !!!');
//     // }
// })
// promise1
//     .then((r) => cl(r))
//     .catch((err) => cl(err))

let blogsArray = [
  { title: "Blog One Title", content: "Blog One  Content" },
  { title: "Blog Two Title", content: "Blog Two  Content" },
];
let blogs = document.getElementById("blogs");
function createBlogs(blogTitle, blogContent) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let obj = {
        title: blogTitle,
        content: blogContent,
      };
      blogsArray.push(obj);
      let error = true;
      if(!error){
          resolve(blogsArray)
      }else{
        reject("Something Went Wrong !!!");
      }
    }, 3000);
  });
  return promise;
}

function readBlogs(arr) {
  setTimeout(() => {
    cl("readBlogs called");
    templating(arr);
  }, 0);
}

function templating(arr) {
  let result = "";
  arr.forEach((blog) => {
    result += `<div class="card mb-1">
                              <div class="card-body">
                                  <h3>${blog.title}</h3>
                                  <p>${blog.content}</p>
                              </div>  
                          </div>`;
  });
  blogs.innerHTML = result;
}
createBlogs("Blog Three Title", "Blog Three Content")
                        .then(res => readBlogs(res))
                        .catch(err => document.write(err))


// readBlogs(blogsArray);
