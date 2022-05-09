let cl = console.log;

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  // this.getDefaultLocation = function(){
  //   return defaultLocation;
  // }
  // this.setDefaultLocation = function(val){
  //   if(val.x && val.y){
  //     defaultLocation = val;
  //   }else {
  //     throw new Error("Please provide proper location")
  //   }
  // }
  let computeOptimumLocation = function () {
    cl(defaultLocation);
  };
  this.draw = function () {
    cl("Draw");
    computeOptimumLocation();
  };
  Object.defineProperty(this, 'dl', {
    get : function(){
      return defaultLocation;
    },
    set : function(val){
      if(val.x && val.y){
        defaultLocation = val;
      }else{
        throw new Error("Invalid Location")
      }
    }
  })
}
const c1 = new Circle(10);
cl(c1);
c1.draw();
// let location1 = c1.getDefaultLocation();
// cl(location1)
cl(c1.radius) // get 
c1.radius = 100; // set 
cl(c1)


// c1.setDefaultLocation({x:10, y : 20})
// cl(c1.getDefaultLocation())
cl(c1.dl)

// c1.dl = false;
c1.dl = {x:100, y:100};
cl(c1.dl);


function Square(side){
  this.side = side;
  this.computeOptimumLocation = function(){
    // cl('Print Square')
  }
}

// new Object()
// 9588454806 7676