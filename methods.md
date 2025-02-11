# Object & Array Methods

## Array Methods

1. ### map() - Transform Each Element

   Use case: When you need a new array with modified values.

   ```js
   const numbers = [1, 2, 3, 4];
   const squared = numbers.map((num) => num ** 2);

   console.log(squared); // [1, 4, 9, 16]
   ```

- Does not modify the original array
- Always returns a new array

#### I use this all the time when iterating to the DOM in REACT

```js
{
  Object.values(BBC.event).map(({ title, speakers }) => {
    const [{ fName, lName }] = speakers;

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

- React needs to efficiently render multiple elements. map() lets you transform an array into a list of JSX elements.
  - forEach() does not return a new array, so it can't be used inside JSX.

2. ### forEach() - Loop Through Elements

   Use case: When you want to perform an action for each item but don’t need a new array.

   ```js
   const fruits = ["Apple", "Banana", "Mango"];
   fruits.forEach((fruit, index) => console.log(index, fruit));
   ```

   - Used for executing side effects (e.g., logging, modifying external values)
   - Does not return anything

3. ### filer() - Extract Matching Elements

   Use case: When you want a subset of elements that match a condition.

   ```js
   const numbers = [10, 25, 30, 45];
   const greaterThan20 = numbers.filter((num) => num > 20);
   console.log(greaterThan20); // [25, 30, 45]
   ```

   - returns a new array with elements that match the condition
   - Does not modify the original array

   4. ### reduce() - Accumulate a Single Value
      Use case: When you need to calculate a sum, product, or aggregate value.

- It reduces an array to a single value (number, object, array, string, etc.).
- It iterates through the array while maintaining an accumulator (the result being built up).

```js
array.reduce((accumulator, currentValue, index, array) => {}, initialValue);
```

- accumulator → The value carried over from each iteration (final result).
- currentValue → The current item in the loop.
- index → The index of currentValue (optional).
- array → The array itself (optional).
- initialValue → The starting value for accumulator (optional but recommended).

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10
```

- Takes an initial value (here 0)
- `acc` accumulates the result

[Back to Main](readme.md)
