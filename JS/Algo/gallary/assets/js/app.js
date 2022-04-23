let cl = console.log;

const changeColor = document.getElementById('changeColor');
const allDivs = Array.from(document.querySelectorAll('.all'));


const slecetColorBox = (eve) => {
    let getColor = `.${eve.target.value}`;
    cl(getColor);
    allDivs.forEach(div => {
        div.classList.add('d-none');
    })
    let slectedDivs = Array.from(document.querySelectorAll(getColor)) // orange
    slectedDivs.forEach(div => {
        div.classList.remove('d-none')
    })
}






changeColor.addEventListener('change', slecetColorBox)