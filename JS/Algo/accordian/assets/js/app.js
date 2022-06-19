let cl = console.log;

const accoHeading = Array.from(document.querySelectorAll(".accoHeading"));

const accoChangeHandler = (eve) => {
  // cl(eve.target)
  accoHeading.forEach(hd => {
    hd.classList.remove('active')
  })
  eve.target.classList.add('active');
}



accoHeading.forEach((heading) => {
  heading.addEventListener("click", accoChangeHandler);
});
