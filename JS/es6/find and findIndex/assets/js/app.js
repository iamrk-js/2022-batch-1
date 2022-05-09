let cl = console.log;

let posts = [
  {
    id: 123,
    msg: "You are not bad at all",
  },
  {
    id: 124,
    msg: "You are not good at teaching",
  },
  {
    id: 125,
    msg: "You are Dumb",
  },
  {
    id: 126,
    msg: "You don't have value of others time",
  },
  {
    id: 127,
    msg: "I love the way you explain",
  },
];

let givenid = 125;

// let getPost = posts.find((post) => {
//   if(post.id === givenid){
//     return true;
//   }else{
//     return false
//   }
// })
// let getPost = posts.find(post =>{
//   return  post.id === givenid
// })
// cl(getPost)

// let getIndex = posts.findIndex((post) => {
//   if(post.id === givenid){
//     return true
//   }else{
//     return false
//   }
// })
// let getIndex = posts.findIndex((post) => {
//   return post.id === givenid;
// });
let getIndex = posts.findIndex((post) => post.id === givenid);
cl(getIndex)
posts.splice(getIndex, 1);
cl(posts);
