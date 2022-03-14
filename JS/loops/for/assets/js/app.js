var cl = console.log;
// DRY 

for (var i = 1; i <= 5; i++) {
    cl(i);
}


for (var j = 11; j <= 20; j++) {
    cl(j)
}
cl("Print Even Numbers from 11 to 20")
for (var k = 11; k <= 20; k++) {
    if (k % 2 === 0) {
        cl(k)
    }
}


cl("Print Odd Numbers From 21 to 50");

for (var z = 21; z < 51; z++) {
    if (z % 2 !== 0) {
        cl(z)
    }
}
cl("Beark")
for (var p = 51; p <= 100; p++) {
    if (p % 3 === 0 && p % 7 === 0) {
        cl(p);
    }
}

// Print numbers in between 101 and 200, which can be divided by 5 or 9

cl("Beark")
for(var r = 101; r <= 200; r++){
    if(r % 5 === 0 || r % 9 === 0){
        cl(r);
    }
}