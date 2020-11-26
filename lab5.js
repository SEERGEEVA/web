let arr = [];

for ( let i = 0; i < 20; i++ ) {
    arr.push(Math.round( Math.random() * 1000 ));
}

console.log(arr, arr2)

function minmax () {

    min = arr[0];
    max = min;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    console.log(min, max)
}

function median() {

    let med;
    let half = Math.floor(arr.length / 2);

    arr1 = arr.sort(function (a, b) {
        return a - b;
    });


    if (arr1.length % 2) med = arr1[half];
    else med = (arr1[half] + arr1[half] + 1) / 2.0;

    console.log(med)
}

minmax();
median();


function quickSort(arr) {

    if (arr.length < 2) return arr;

    let pivot = arr[0];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));