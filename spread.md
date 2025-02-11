# Spread vs Rest Operator

- Rest Operator
  Used in function parameters to collect remaining arguments into an array.

- Spread Operator
  - Expands elements from an array, object, or iterable.
  - Used in function calls, array merging, and object cloning.

| Feature  |                       Rest Operator(...)                       |                   Spread Operator (...)                   |
| :------- | :------------------------------------------------------------: | :-------------------------------------------------------: |
| Purpose  |        Collects multiple elements into an array/object         |           Expands elements from an array/object           |
| Use Case |           Function parameters, object destructuring            |        Array merging, function arguments, cloning         |
| Example  |                    function sum(...nums) {}                    |              const newArray = [...oldArray]               |
| Position | Used in function arguments ((...args)) or object destructuring | Used in function calls (func(...args)) or object literals |

### Quick Rule of Thumb

- If `...` is on the left side of =, it’s Rest `(const { name, ...rest } = obj)`.
- If `...` is on the right side of =, it’s Spread `(const newArr = [...oldArr])`.

# 1. Spread Operator (...)

- Collects multiple values into an array or object.
- Used in function parameters and destructuring.

# 2. Rest Operator (...)

- Collects multiple values into an array or object.
- Used in function parameters and destructuring.

  [Back to Main](readme.md)
