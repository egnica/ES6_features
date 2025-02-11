# We want to swap two values in an array without using a temporary variable.

for example:
`arr = [5, 2, 9];`
and `i = 0`, then `arr[i] = 5` and `arr[i + 1] = 2`.

The goal is to swap them so that the array becomes:
`[2, 5, 9]`

This would be a valid swap that also mutates the original array:

```js
[secondArr[i], secondArr[i + 1]] = [secondArr[i + 1], secondArr[i]];
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

# Destructuring Nested Objects

- A json object has `key | value` pairs `title`, there is a nested array of objects called `speakers`
  - I destructured `title` and `speakers`
  - Then destructured `speakers` to get `fName` and `lName`

```js
{
  Object.values(BBC.event).map(({ title, speakers }) => {
    const [{ fName, lName }] = speakers; //Destructuring nested array of objects
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
