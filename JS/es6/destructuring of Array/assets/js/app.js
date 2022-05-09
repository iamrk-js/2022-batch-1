let cl = console.log;

let info = [
  "Ravikiran Niturkar",
  "javascriptiscoolstuff@gmail.com",
  1234567890,
];

// let fullName = info[0];
// let email = info[1];
// let contact = info[2];

let [fullName, email, contact] = info;
cl(fullName, email, contact);

let data = "Cricket, kapli Dev, 1983";

// let sportsName = 'Cricket';
// let captain = "Kapil Dev";
// let year = 1983;

let [sportsName, captain, year] = data.split(", ");
cl(sportsName, captain, year);

let team = ["Dada", "virat", "Sachin", "Yuvi", "Viru", "Kumbale"];
cl(team);
cl(...team);
// let cap = 'Dada';
// let vc = 'Virat';
// let players = ['Sachin']

// let cap = team[0];
// let vc = team[1];
// let players = team.slice(2);

let [cap, vc, ...players] = team;

cl(cap, vc, players);

let x = 10;
let y = 20;
// let z = x;
// x = y;
// y = z;

// y = y - x; // 10
// x = x + y; // 10+10 >20
// y = x - y; // 20-10>10

[x, y] = [y, x];

cl(`value of x ${x} and value of y ${y}`);
// x = 20; y = 10


let inring = "HUlk";
let outRing = "The Rock";

[inring, outRing] = [outRing, inring]

cl(`value of inring ${inring} and value of outRing ${outRing}`);


// 100 >> usd >> ; gbp >> ; aud >> ;


function convertCurrancy(amount){
    let convertedCurrancies = {
        USD : amount * 1.75,
        GBP : amount * 1.9,
        AUD : amount * 1.45
    }
    return convertedCurrancies;
}

let {USD:USDval,GBP: GBPval, AUD:AUDval} = convertCurrancy(100);

cl(USDval)
cl(USDval, GBPval, AUDval)