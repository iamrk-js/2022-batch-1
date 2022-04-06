let cl = console.log;
let jsImage = 'https://media.istockphoto.com/photos/javascript-code-computer-language-programming-internet-text-editor-picture-id1156837650?s=612x612';
// DOM >> Document Object Model
// Everything in javaScript is Object
// single element selection methods
// muli element selection methods

// Object >> methods and properties

let heading = document.getElementById('heading'); // heading is a document Object

cl(typeof heading);

// properties >> innerHTML, innerText, textContent, style, classList, className

let getHtmlOfHeading = heading.innerHTML;
cl(getHtmlOfHeading);

// let getText = heading.innerText;
let getText = heading.textContent;
cl(getText);

// heading.style.backgroundColor = 'orange';


let getClassList = Array.from(heading.classList);
// classList returns DOMTokenlist >> It is array like Object 
cl(getClassList)
heading.classList.add('p-4');
let  getClassname = heading.className;
// className returns string
cl(getClassname, typeof getClassname);

// getElementsByClassname
// It is a multiple selection method
// It returns HTMLcollection >> It is array like object
let getLists = Array.from(document.getElementsByClassName('list-group-item'));
cl(getLists);
for (let i = 0; i < getLists.length; i++) {
    // getLists[i].style.backgroundColor = 'blueviolet'   
    getLists[i].classList.add('active');
}
getLists.forEach(element => {
    cl(element.textContent)
});


//getelementsBytagName
// It is a multiple selection method
// It returns HTMLCollection >> It is nothing but array like Object

// querySelector 
// It is a single selection method
// They returns Document Object

let skill = document.querySelector('.list-group-item');
cl(skill);
skill.classList.remove('active');


// querySelectorAll
// It is a multiple selection method
// It returns NodeList

let getAllSkills = Array.from(document.querySelectorAll('li'));

cl(getAllSkills);

getAllSkills.forEach(ele => cl(ele.innerHTML));

getAllSkills.pop();


let mainSkill = document.querySelector('.mainSkill');

cl(mainSkill)

let srcValue = mainSkill.getAttribute('src');
cl(srcValue);

let titleValue = mainSkill.getAttribute('title');
cl(titleValue)

let classValue = mainSkill.getAttribute('class');
cl(classValue);

mainSkill.setAttribute('src', jsImage);
mainSkill.setAttribute('title', 'javaScript Image')

mainSkill.removeAttribute('title');
