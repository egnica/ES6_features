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
