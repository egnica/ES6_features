# Array Destructuring

## Basic example

- instead of:

```js
const numbers = [10, 20, 30];
const first = numbers[0];
const second = numbers[1];
console.log(first, second); // 10, 20
```

- You can use array destructuring

```js
const [first, second] = numbers;
console.log(first, second); // 10, 20
```

## Skipping Values

- You can skip values using empty commas:

```js
const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;
console.log(first, third); // 10, 30
```

## Using the Rest Operator

```js
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log(first, second); // 10, 20
console.log(rest); // [30, 40, 50]
```

## Swapping Variables with Destructuring

```js
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b); // 10, 5
```

interesting use case for swapping variables.

- When you need to swap two variables frequently in an algorithm.
- When it makes the code easier to understand (e.g., board game turns).
- When you don't need a condition (ternary needs a condition).

### Sorting Algorithm Using Swapping (Bubble Sort Example)

Swapping is commonly used in sorting algorithms, especially in Bubble Sort, Selection Sort, and QuickSort. Below is an example of Bubble Sort, where elements are repeatedly swapped if they are in the wrong order.

```js
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap using destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Optimizes by ignoring the last sorted element
  } while (swapped);

  return arr;
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers));
// Output: [1, 2, 5, 5, 6, 9]
```

The Bubble Sort algorithm keeps running as long as swapped remains true. The process stops once no swaps occur in a full pass through the array.

```js
[5, 2, 9, 1, 5, 6]  (Initial)
 ^  ^  Swap → [2, 5, 9, 1, 5, 6]
       ^  ^  No swap
          ^  ^  Swap → [2, 5, 1, 9, 5, 6]
             ^  ^  Swap → [2, 5, 1, 5, 9, 6]
                ^  ^  Swap → [2, 5, 1, 5, 6, 9]
```

How it works:

- The algorithm loops through the array.
- If two adjacent elements are out of order, they swap.
- The process repeats until the array is fully sorted.

### Complete breakdown on The Bubble Sort Algorithm

#### Step 1: Function Definition & Setup

```js
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

```

What is happening:

- The function takes an array `arr` as input.
- `n = arr.length:` Stores the length of the array (number of elements).
- `swapped`: A boolean flag used to track whether a swap occurred. (This prevents unnecessary iterations if the array is already sorted.)

#### Step 2: Outer Loop (do-while)

```js
  do {
    swapped = false;
```

What is happening:

- The `do-while` loop ensures at least one iteration is executed.
- `swapped = false`: Before each pass, we assume the array is sorted. If any swaps happen during this pass, swapped will be set to true.

#### Step 3: Inner Loop (for loop)

```js
for (let i = 0; i < n - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    // Swap using destructuring
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    swapped = true;
  }
}
```

What is happening:

- `for (let i = 0; i < n - 1; i++)`
  - Iterates through the array from index 0 to n-2 (since we compare adjacent elements).

[Back to Main](readme.md)
