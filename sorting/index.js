// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
 
        for (var j = 0; j < (arr.length - i - 1); j++) {
 
            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
        }
    }

    return arr;

}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let lowest = i

        for (let j = i + 1; j < arr.length; j++) {

          if (arr[j] < arr[lowest]) {
            lowest = j
          }

        }

        if (lowest !== i) {

          ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]

        }
      }

      return arr
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {

    let sortedArr = []

    while (left.length && right.length) {

      if (left[0] < right[0]) {

        sortedArr.push(left.shift())
      } 
      else {
        
        sortedArr.push(right.shift())
      }

    }

    return [...sortedArr, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
