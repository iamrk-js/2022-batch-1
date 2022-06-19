let cl = console.log;

function shortenArray<T>(arr: T[], removeCount: number) {
    return arr.splice(arr.length - removeCount)
}

let skills: string[] = ["Angular", "Node", "Typescript", "React", "jQuery"];

let s1 = shortenArray<string>(skills, 2);

let ages: number[] = [30, 50, 20, 60, 80, 90, 100];

let newAges = shortenArray<number>(ages, 3)

// 10 >> 0 to 3 >> 4 remove 
// 10 >> 4 > 0 to 5 > 6 to 9 removed >> 10 - 4 >> 6

console.log(skills);
console.log(ages);


interface Iperson {
    name: string;
    age: number;
    profile: string;
}

let info: Iperson[] = [
    {
        name: 'Jhon',
        age: 35,
        profile: "Angular developer"
    },
    {
        name: 'Jen',
        age: 25,
        profile: "MEAN developer"
    },
    {
        name: 'July',
        age: 30,
        profile: "React developer"
    },
    {
        name: 'Mark',
        age: 30,
        profile: "MERN developer"
    },
]

let newInfo = shortenArray<Iperson>(info, 2);

console.log(info);


const promise: Promise<Iperson[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve(
                [
                    {
                        name: 'Jhon',
                        age: 35,
                        profile: "Angular developer"
                    }
                ]
            );
        } else {
            reject("Something went wrong.")
        }
    }, 2000)
})

promise.then(res => {
    console.log(res)
})

// T >> Book , Magezine 
// U >> Student, Staff, teachers

function checkOut<T,U>(item: T, role : U){
    // availabelItem : T = getItemFormDataBase(item) >> true or false
    // availabelForRole : U = getUserFromDB(item, role) >> true or false
    // if(availabelItem && availabelForRole){
    //     // return item
    // }
}