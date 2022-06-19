let cl = console.log;

const changeColor = document.getElementById('changeColor');
const body = document.querySelector('body')

const onChangeHandler = (eve) => {
    // cl(this)
    // cl(eve.target.value)
    body.style.backgroundColor = eve.target.value;
}




changeColor.addEventListener('change', onChangeHandler)