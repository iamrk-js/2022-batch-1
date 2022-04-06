let cl = console.log;


let counts = [1, 2, 3, 2, 1, 4, 2, 5, 1, 4, 5, 3, 6, 5, 8, 4, 7];

function removeDuplicates(arr) {
    let isExsist = {};
    let result = [];
    let ele;
    for (let i = 0; i < arr.length; i++) {
        ele = arr[i];
        if (!isExsist[ele]) {
            result.push(ele);
            isExsist[ele] = true;
        }
    }
    return result;
}

cl(removeDuplicates(counts))