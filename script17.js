//1 In the array of 1 to 100, find out one duplicate 

//2 Find out wether the given array is consecutive 
// i/p:[1,5,3,2,4] o/p: Yes it is consecutive 
// i/p:[1,5,3,3,4] o/p: Not consecutive as 3 is repeated

//3 v shape pattern 
// *        * 
//  *      *
//   *    *
//    *  *
//     **

//4 Find out 3 maximum numbers from the array [1,3,10,2,20,50]

function createVStarPattern(height) {
    for (let i = 0; i < height; i++) {
        let pattern = '';

        // Add spaces before the first star
        pattern += ' '.repeat(i);

        // Add the first star
        pattern += '*';

        // Add spaces between the two stars
        pattern += ' '.repeat(2 * (height - i - 1));

        // Add the second star
        if (i !== height - 1) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

// Example usage with a height of 5
createVStarPattern(5);