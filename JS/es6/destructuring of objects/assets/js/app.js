let cl = console.log;

let person = {
  fname: "Jhon",
  lname: "Doe",
  email: "jhon@gmail.com",
  contact: 9874563210,
};

// let fname = person.fname;
// let lname = person.lname;
// let email = person.email;
// let contact = person.contact;

// let { email, lname, contact, fname } = person;
let { email, lname: lastName, contact, fname: firstName } = person;

cl(email, lastName, contact, firstName);
const rk = {
  first: "Ravikiran",
  last: "Niturkar",
  links: {
    social: {
      twitter: "https://twitter.com/iamrk",
      faceBook: "https://facebook.com/iamrk",
    },
    web: {
      blog: "https://javascriptiscoolstuff.com",
      traning: "https://theultimatecoders.com",
    },
  },
};
// let twitter = rk.links.social.twitter;
// let faceBook = rk.links.social.faceBook;
// let {twitter, faceBook} = rk.links.social;
let { twitter: tweet, faceBook: fb } = rk.links.social;
cl(tweet, fb);

let setting = {width : 300, color : 'skyblue'};


// width, height, color, fontSize 


let {width : w, height : h = 300, color : c = 'orange', fontSize : fs= 25} = setting;
// width = undefined
// width = 300
// color = 'orange'
// color = 'skyblue'
cl(w, fs, c, h);
c = 'blueviolet';
cl(c)