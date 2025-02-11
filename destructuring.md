# 1. Array Destructuring

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
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap using destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers));
// Output: [1, 2, 5, 5, 6, 9]
```

The Bubble Sort algorithm keeps running as long as swapped remains true. The process stops once no swaps occur in a full pass through the array.

- **One full pass**

```js
[5, 2, 9, 1, 5, 6]  (Initial)
 ^  ^  Swap → [2, 5, 9, 1, 5, 6]
                  ^  ^  No swap
               [2, 5, 9, 1, 5, 6]
                      ^  ^  Swap → [2, 5, 1, 9, 5, 6]
                                             ^  ^  Swap → [2, 5, 1, 5, 9, 6]
                                                                       ^  ^  Swap → [2, 5, 1, 5, 6, 9]
```

How it works:

- The algorithm loops through the array.
- If two adjacent elements are out of order, they swap.
- The process repeats until the array is fully sorted.

### What’s Happening in `[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]` and why it works

We want to swap two values in an array without using a temporary variable.

for example:
`arr = [5, 2, 9, 1, 5, 6];`
and `i = 0`, then `arr[i] = 5` and `arr[i + 1] = 2`.

The goal is to swap them so that the array becomes:
`[2, 5, 9, 1, 5, 6]`

This would be a valid swap that also mutates the original array:

```js
[secondArr[i], secondArr[i + 1]] = [secondArr[i + 1], secondArr[i]];
```

#### Although this is interesting, I would still use the built in .sort() function for this

### note : for (let i = 0; i < n; i++)

in this `for loop`, it is recommended to use `i < n - 1` if comparing adjacent elements. Since there is a point that n+1 is being compared, that would cover the last element in the length of the array. This was confusing me at first, but I think it makes more sense now that I think about it. The `n-1` avoids any 'out of bounds error'. But using just the length without the '-1' doesn't seem to cause an out of bounds.

# 2. Object Destructuring

## Basic Example

instead of:

```js
const person = { name: "Nicholas", age: 30, city: "Minneapolis" };
const name = person.name;
const age = person.age;
console.log(name, age); // Nicholas, 30
```

Use object destructuring:

```js
const person = { name: "Nicholas", age: 30, city: "Minneapolis" };
const { name, age } = person;
console.log(name, age); // Nicholas, 30
```

## Renaming Variables

If you want to assign an object property to a variable with a different name:

```js
const person = { name: "Nicholas", age: 30 };
const { name: fullName, age: years } = person;
console.log(fullName, years); // Nicholas, 30
```

## Setting Default Values

If a property is undefined, you can set a default value:

```js
const person = { name: "Nicholas" };
const { name, age = 25 } = person;
console.log(name, age); // Nicholas, 25
```

## Using the Rest Operator (...) in Objects

```js
const user = {
  name: "Nicholas",
  age: 30,
  city: "Minneapolis",
  job: "Developer",
};
const { name, age, ...details } = user;
console.log(details); // { city: "Minneapolis", job: "Developer" }
```

# 3. Nested Destructuring

## Destructuring Nested Objects

```js
const person = {
  name: "Nicholas",
  address: {
    city: "Minneapolis",
    state: "Minnesota",
  },
};

const {
  name,
  address: { city, state },
} = person;
console.log(city, state); // Minneapolis, Minnesota
```

- Something I do a lot is use json instead of a database for read options.
  Destructuring is great for these json objects as well as the nested array objects.

```js
{
  Object.values(BBC.event).map(({ title, speakers }) => {
    const [{ fName, lName }] = speakers;
    {
      console.log(fName);
    }
    return (
      <>
        <h3>{title}</h3>
        <p>
          {fName} {lName}
        </p>
      </>
    );
  });
}
```

- the json object has `key | value` pairs like `title`, there is a nested array of objects called `speakers`
  - I destructured `title` and `speakers`
  - Then destructured `speakers` to get `fName` and `lName`

[Back to Main](readme.md)
