let cl = console.log;

const lis = Array.from(document.querySelectorAll(".tabHeading li"));
const tabPanel = Array.from(document.querySelectorAll(".tabPanel"));
cl(tabPanel);

const tabChangeHandler = (eve) => {
  //   cl(eve.target);
  let getId = eve.target.getAttribute("data-id");
  //   cl(getId);
  tabPanel.forEach((tab) => {
    tab.classList.remove("active");
  });
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  eve.target.classList.add("active");
  let getPanel = document.getElementById(getId);
  getPanel.classList.add("active");
};

lis.forEach((li) => {
  li.addEventListener("click", tabChangeHandler);
});
