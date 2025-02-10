console.log("Hello World");

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {

      // ✅ Ensure `i` stops before `n-1`
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
        swapped = true;
      }
    }
     n--; // ✅ Reduce range to optimize
  } while (swapped);

  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers));
