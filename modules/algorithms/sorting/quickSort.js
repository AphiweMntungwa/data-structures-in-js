function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotIndex = start;
    let pivotValue = arr[start]
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue >= arr[i]) {
            pivotIndex++
            swap(arr, i, pivotIndex)
        }
    }

    if (pivotIndex) {
        swap(arr, start, pivotIndex)
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return pivotIndex;
}


export default function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIdx = pivot(arr, start, end)
        quickSort(arr, start, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, end)
    }
    return arr;
}

//quickSort([5,12,50, 4, 10, 7,6,3, 2, 1, 9, 8, 7, 0, -10]);
//3
//0
//1
//2