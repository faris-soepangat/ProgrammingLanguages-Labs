/*
Faris Soepangat
1001374988
Due 9/29/2023
*/

// 1. 
// Creates an array with numbers between 1 and 10
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2a.
// Creates a set of multiples of 5 between 1 and 51 using map() and filter()
const fiveTable = inputtable.map(number => number * 5).filter(number => number <= 51);

// Print the content to the console
console.log(fiveTable); // [
						//    5, 10, 15, 20, 25,
						//    30, 35, 40, 45, 50
						// ]

// 2b. 
// Creates a set of multiples of 13 between 1 and 131 using map() and filter()
const thirteenTable = inputtable.map(number => number * 13).filter(number => number <= 131);

// Prints the content to the console
console.log(thirteenTable); // [
							//    13, 26, 39, 52, 65,
							//    78, 91, 104, 117, 130
							// ]

// 2c. 
// Creates a set of squares of the numbers from inputtable using map()
const squaresTable = inputtable.map(number => number * number);

// Prints the content to the console
console.log(squaresTable); // [
						   //    1, 4, 9, 16, 25,
						   //    36, 49, 64, 81, 100
						   // ]

// 3. 
// Creates an array from 1 to 100 using Array.from()
const inputtable1 = Array.from({length: 100}, (_, i) => i + 1);

// Gets the odd multiples of 5 from inputtable1 array using filter()
const oddMultiples = inputtable1.filter(number => number % 5 === 0 && number % 2 !== 0);

// Prints the content to the console
console.log(oddMultiples); // [
						   //    5, 15, 25, 35, 45,
						   //    55, 65, 75, 85, 95 
						   // ]

// 4. 
// Gets the even multiples of 7 from inputtable1 array using filter()
const evenMultiples = inputtable1.filter(number => number % 7 === 0 && number % 2 === 0);

// Sums up the values together using reduce()
const sum = evenMultiples.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

// Prints the sum to the console
console.log(sum) // 392

									// Use curring to rewrite the function below:
function cylinder_volume(r) 	    // function cylinder_volume(r, h)
{									// {
  return function(h) 				// var volume = 3.14 * r * r * h;
  {									// return volume;
    var volume = 3.14 * r * r * h;  // }
    return volume;
  }
}

// 5.
// Uses r = 5 to call the curried function
var rad = cylinder_volume(5);

// 5a.
// Reuses the curried function with h = 10
console.log(rad(10)); // 785

// 5b.
// Reuses the curried function with h = 17
console.log(rad(17)); // 1334.5

// 5c.
// Reuses the curried function with h = 11
console.log(rad(11)); // 863.5

// 6.
// Use the following code to take advantage of closures to wrap content with HTML tags
makeTag = function (beginTag, endTag) 
{
    return function (textContent) 
    {
        return beginTag +textContent +endTag;
    }
}

/*
Example output:
<table> 
<tr> 
<th>Firstname</th> 
<th>Lastname</th> 
<th>Age</th> 
</tr> 
<tr> 
<td>Jill</td> 
<td>Smith</td> 
<td>50</td> 
</tr> 
<tr> 
<td>Eve</td> 
<td>Jackson</td> 
<td>94</td> 
</tr> 
</table>
*/

// 7. 
// Creates an array from 1 to 100 using Array.from()
const inputtable2 = Array.from({length: 100}, (_, i) => i + 1);

// Gets the odd multiples of 5 from inputtable1 array using filter()
const oddMultiples1 = inputtable2.filter(number => number % 5 === 0 && number % 2 !== 0);

// Prints the content to the console
console.log(oddMultiples1); // [
						    //    5, 15, 25, 35, 45,
						    //    55, 65, 75, 85, 95 
						    // ]
						    
// Gets the even multiples of 7 from inputtable1 array using filter()
const evenMultiples1 = inputtable2.filter(number => number % 7 === 0 && number % 2 === 0);

// Sums up the values together using reduce()
const sum1 = evenMultiples1.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

// Prints the sum to the console
console.log(sum1) // 392








