function merge(arr1, arr2) {
    let arr = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            arr = [...arr, arr1[i], arr2[j]]
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            arr.push(arr2[j]);
            j++
        }
    }
    while (arr1[i]) {
        arr.push(arr1[i])
        i++
    }
    while (arr2[j]) {
        arr.push(arr2[j])
        j++
    }
    return arr;
}

//merge([0, 7, 8, 9, 19, 20, 50], [1, 17, 18, 21, 43, 44, 45, 66, 67])

export default function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

//mergeSort([5, 20, 1, 2, 2, 1, 40, 10, 3, 4, 78, 3, 2, 12, 34, 344, 25, 255, 24, 17, 78, 45, 74, 45, 1, 21, 7, 24, 22, 100, 90, 85, 120, 101, 119, 1, 100, 0])

//