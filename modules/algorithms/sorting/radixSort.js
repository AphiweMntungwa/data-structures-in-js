function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = digitCount(arr[0])
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]))
    }
    return max;
}

//mostDigits([5, 555])

//figure the largest digit number using the mostDigits helper, call it n
//create a loop that runs n times

export default function radixSort(arr) {
    let digitCount = mostDigits(arr);
    for (let k = 0; k < digitCount; k++) {
        const buckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets)
    }
    return arr;
}

// radixSort([5,59,2, 1, 13, 11, 204, 45])