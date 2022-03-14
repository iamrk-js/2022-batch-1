let cl = console.log;


let createClock = () => {
    let d = new Date();
    const digitalClock = document.getElementById('digitalClock');

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = 'AM';

    // if (hr >= 12) {
    //     session = 'PM'
    // }
    session = hr >= 12 ? 'PM' : 'AM'
    // if (hr > 12) {
    //     hr = hr - 12;
    // }
    hr = hr > 12 ? hr - 12 : hr;
    // if (hr < 10) {
    //     hr = '0' + hr
    // }else{
    //     hr = hr
    // }

    // hr = hr < 10 ? '0' + hr : hr;
    // hr = setZero(hr);
    // if (min < 10) {
    //     min = '0' + min
    // }
    // min = min < 10 ? '0' + min : min;
    // min = setZero(min);
    // if (sec < 10) {
    //     sec = '0' + sec
    // }
    // sec = sec < 10 ? '0' + sec : sec;
    // sec = setZero(sec);

    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;
    digitalClock.innerHTML = result;
    cl(result);

    setTimeout(createClock, 1000)
}

createClock();


function setZero(n) {
    return n = n < 10 ? '0' + n : n;
}

