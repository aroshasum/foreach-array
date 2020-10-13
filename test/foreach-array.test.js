import each from '../src/foreach-array';

const array = [
    'First Name',
    'Last Name',
    'Country'
];

each(array, (value, index, array) => {
    console.log(index + ': ' + value);
});

// Console log output will be:
//      0: First Name
//      1: Last Name
//      2: Country
