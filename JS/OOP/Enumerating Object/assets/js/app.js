let cl = console.log;

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        cl('Draw')
    }
}
// Circle.
const c1 = new Circle(10);

for ( let key in c1){
    // cl(key, c1.key);
    // cl(key, c1[key]);
    if(typeof c1[key] !== 'function'){
        cl(key , c1[key])
    }
}

let keys = Object.keys(c1);
cl(keys);

// c1 has radius >> cl

if('radius' in c1){
    cl('We have Radius!!')
}

if('diemeter' in c1){
    cl('We have Diemeter Key')
}else{
    cl(`We don\'t have Diemeter Key`)
}