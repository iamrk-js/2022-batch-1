let cl = console.log;

let blogsArray = [
  { title: "Blog One Title", content: "Blog One  Content" },
  { title: "Blog Two Title", content: "Blog Two  Content" },
];

let blogs = document.getElementById("blogs");

function createBlogs(blogTitle, blogContent) {
  setTimeout(() => {
    cl("createBlogs called");
    let obj = {
      title: blogTitle,
      content: blogContent,
    };
    blogsArray.push(obj);
    readBlogs(blogsArray);
  }, 3000);
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
createBlogs("Blog Three Title", "Blog Three Content");
// readBlogs(blogsArray);
