  function maxSubArraySum(arr, num) {
    //Check if the input is an array, if not return false
    if (!Array.isArray(arr)) {
      return false;
    }

    //Check if the arr is empty, if it is return 0
    if (num > arr.length) {
      return null;
    }


    //Declare a variable which keeps tracl of the maximum sum
    let max = -Infinity;
    let sum = 0;

    //Declare 2 pointers to keep track
    let i = 0;
    let j = 0;

    //Loop over the array with a window spacing of *num* values
    while (num <= arr.length) {
      //Check if the index is equal to num
      if (j !== num) {
        sum += arr[j];
        j++;
      } else {
        //Check if the sum of the window values are greater than the max value
       max = Math.max(max, sum);
       
        //Move the window
        i++
        j = i;
        num++;

        //reset the sum
        sum = 0;
      }
    }
    //return the max value
    return max;
  }

  console.log(maxSubArraySum([ 1, 2, 5, 2, 8, 1, 5 ], 2));
  console.log(maxSubArraySum([ 1, 2, 5, 2, 8, 1, 5 ], 4));
  console.log(maxSubArraySum([ 4, 2, 1, 6 ], 1));
  console.log(maxSubArraySum([ 4, 2, 1, 6, 2 ], 4));
  console.log(maxSubArraySum([], 4));
