// Question 1:
// Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14).

const Arr1 = [3, 5, 9, -3, -4]

    const sum = Arr1.reduce((a, b) => a + b, 0)
    
    console.log(sum)


// Question 2:                                // Enter in terminal to see output- node Week2_Algorithms.js
// Given an array with multiple values,
// write a function that returns the maximum number in the array.

const Arr2 = [5, 6, -2, 7, 11]        // This way would not be the best for interview (shortcuts). Do it with for loops as below

    const sum2 = Math.max(...Arr2)

    console.log(sum2)


// Using for loops: 

const Arr3 = [5, 6, -2, 7, 15];

    function getMax (Arr3) {
        let currentMax = Arr3 [0]   // getting first element in array so we can use it in for loop
        for (let i = 1; i < Arr3.length; i++) {
            if (Arr3[i] > currentMax ) {
                currentMax = Arr3[i]
            }
        }
        console.log('heyo' + currentMax)
    }
    getMax(Arr3)

// Question 3:
// Given an array with multiple values,
//  write a function that returns the average of the values in the array.
// [1,3,5,7,20] average is 7.2

const Arr4 = [-4, 15, 13, -7, 30];

    function getAverage(Arr4) {
        let sum = Arr4 [0]
        for (let i = 1; i < Arr4.length; i++) {
            sum = Arr4[i] + sum
        }
        let currentAverage = sum / Arr4.length
        return currentAverage
    }
    console.log(getAverage(Arr4))