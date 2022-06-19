// type aliase custom type

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';


function combine(num1: Combinable, num2: Combinable, resultConversion: ConversionDescriptor) {
    let result
    if ((typeof num1 === 'number' && typeof num2 === 'number') || resultConversion === 'as-number') {
        result = +num1 + +num2;
    } else {
        return num1.toString() + num2.toString()
    }
    return result;
}

let com1 = combine(10, 20, 'as-number');
console.log(com1, typeof com1);

let com2 = combine('10', '20', 'as-number');
console.log(com2, typeof com2);

let com3 = combine("Ravikiran", " Niturkar", 'as-string');
console.log(com3, typeof com3);

type Product = {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
}
const product1: Product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

const product2: Product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

let products :Product[] = [product1, product2];
let skills: string[] = ["Angular", "Node", "Express"];

let ages: (number | string)[] = [10, 20, 30, 40, '52'];