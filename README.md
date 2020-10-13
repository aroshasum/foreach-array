# foreach-array

This library provides a simple interface to iterate through a given array, avoiding some common errors such as, `Uncaught TypeError: parent.children.forEach is not a function`. We normally encounter such issues when trying to iterate through an array of DOM elements. 

`foreach-array` will be the solution to such errors. Method signature is similar to Array.prototype.forEach.

## Installation

```
npm i foreach-array
```

## Example Usage

After installing foreach-array module, you can use either `import` syntax of ES6 or `require` syntax of node to make this library available in your file.

#### Using `import`

```
import each from 'foreach-array';

const array = ['First Name', 'Last Name', 'Country'];

each(array, (value, index, array) => {
    console.log(index + ': ' + value);
});

// Console log output will be:
//      0: First Name
//      1: Last Name
//      2: Country
```

#### Using `require`

```
const each = require('foreach-array');

const array = ['First Name', 'Last Name', 'Country'];

each(array, (value, index, array) => {
    console.log(index + ': ' + value);
});

// Console log output will be:
//      0: First Name
//      1: Last Name
//      2: Country
```
