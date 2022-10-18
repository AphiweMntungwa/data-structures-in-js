export default function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let k = 0; k < i; k++) {
            if (arr[i] < arr[k]) {
                swap(arr, k, i)
            }
        }
    }

    function swap(arr, a, b) {
        let c = arr[a]
        arr[a] = arr[b]
        arr[b] = c
    }
    return arr;
}




insertionSort([4, 2, 2, 7, 1.2, 1.25, 28, 300, 45, 2, 3, 40, 3, 1, 55, 24, 5, 30, 6])