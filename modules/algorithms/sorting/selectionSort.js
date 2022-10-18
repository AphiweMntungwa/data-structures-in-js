export default function selectionSort(arr) {
    var index = 0;
    for (let i = 0; i < arr.length; i++) {
        index = i;
        for (let k = i; k < arr.length; k++) {
            if (arr[k] < arr[index]) {
                index = k;
            }
        }
        swap(arr, index, i);
    }

    function swap(arr, index1, index2) {
        let val = arr[index2]
        arr[index2] = arr[index1]
        arr[index1] = val
    }

    return arr;
}

//selectionSort([5, 1, 28, 52, 3, 8, 10, 7, 4, 32,5, 1, 4, 7, 8, 70, 1, 4, 6, 7, 13, 2])