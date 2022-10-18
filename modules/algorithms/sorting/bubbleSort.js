export default function bubblesort(arr) {
    let noSwap = true;
    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr.length - (k + 1); i++) {
            if (arr[i] > arr[i + 1]) {
                noSwap = false;
                swap(arr, i, i + 1);
            }
        }
        if (noSwap) break;
    }

    function swap(arr, a, b) {
        let c = arr[b];
        arr[b] = arr[a];
        arr[a] = c;
    }

    return arr;
}

//bubblesort([1,2, 7, 10,3,5,4])