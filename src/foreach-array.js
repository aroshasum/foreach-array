/**
 * Provides a simple interface to iterate through a given array avoiding some common errors such as,
 * `Uncaught TypeError: parent.children.forEach is not a function`.
 * Similar interface to Array.prototype.forEach
 *
 * @param array - target array which will be subjected to iteration.
 * @param callbackFn - Function provided to be executed in each iteration.
 * @returns array - provided array.
 */

const foreachArray = (array, callbackFn) => {
    "use strict";
    Array.from(array).forEach((value, index, array) => {
        callbackFn(value, index, array);
    });

    return array;
};

export default foreachArray;
