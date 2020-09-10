/* Write a for loop that will fill an array with the value of the iterating variable
 */
let arrayloops=[];

for ( i=0 ; i<10 ; i++ ) {
   arrayloops[i]=i ;  
}
console.log(arrayloops);
/* Write for in loop for an object nested in another object 

*/
let personLoops = {
    name : "Viktorija",
    surname : "Loba",
    address :{
        street : "Partizanska",
        number : "30",
        city : "Skopje"
    }
}
for (let nLoops in personLoops.address) {
    console.log(nLoops);
}
/* Write for in loop for the following object {a: 1, b: 2, c: 3} that will log the following:
"a is 1" "b is 2" "c is 3"
*/

/* Write a for loop that will fill an array with anonimous functions and than another loop
that will execute those functions. In the first loop use the iterating value inside the anonimous functions.
*/

let arrLoops = [] ;

for (let i = 0 ; i<3 ; i++){
    arrLoops[i]=function(){
        return i;
    }
}
for (let j=0 ; j<3 ; j++){
    console.log(arrLoops[j]());
}