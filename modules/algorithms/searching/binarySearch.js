function binarySearch(arr, val) {
    let i = 0;
    let j = arr.length - 1
    let k = Math.round(j / 2)
    for (let m in arr) {
        if (arr[k] === val) {
            return k
        }
        if (arr[k] < val) {
            i = k + 1
            k = Math.round((i + j) / 2)
        }
        if (arr[k] > val) {
            j = k - 1
            k = Math.round((i + j) / 2)
        }
        console.log(i, k, j)
    }
    return -1;
}
//binarySearch([2, 5, 6, 8, 13, 15, 28, 30], 28) // -1