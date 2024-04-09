/*
class Car {
    model(porshe, benz) {
        this.po = porshe;
        this.be = benz;
    }
}

let myCar = new Car();
myCar.model('cayan', 'a52');
console.log(myCar);
*/
////////////////////////////////
function Rah(b){
    console.log(b)
}
module.exports.cool=Rah
/////////////////////////////
/*
function H(a, b) {
    a = a || 10; // Set a default value if not provided
    b = b || 22; // Set a default value if not provided
    a += 1;
    b += 1;
    return { a, b }; 
}

const result = H();
console.log(result.a);  // Output: 11
console.log(result.b);  // Output: 23

let a = 1;
let b = 2.2;
const { a: updatedA, b: updatedB } = H(a, b);  // Destructuring assignment to extract values
console.log(updatedA);  // Output: 2
console.log(updatedB);  // Output: 3.2
*/
///////////////////////////////////
/*
function H(a, b) {
    a = a || 10; // Set a default value if not provided
    b = b || 22; // Set a default value if not provided
    a += 1;
    b += 1;
    return { a, b }; 
}

const result = H();
console.log(result.a);  // Output: 11
console.log(result.b);  // Output: 23

let a = 1;
let b = 2.2;
console.log(H(a, b));    // Output: { a: 2, b: 3.2 }
*/
/////////////////////////////////////////
/*
function H() {
    let values = { a: 10, b: 22 };

    function updateValues(newA, newB) {
        values.a = newA;
        values.b = newB;
    }

    function getValues() {
        return { ...values };
    }

    return { updateValues, getValues };
}

const { updateValues, getValues } = H();

console.log(getValues()); // Output: { a: 10, b: 22 }

updateValues(15, 30);
console.log(getValues()); // Output: { a: 15, b: 30 }
*/
//////////////////////////////
/*
function H(a, b) {
    a += 1; // Increment the value of 'a' by 1
    b += 1; // Increment the value of 'b' by 1
    return { a, b };
}

const result = H(10, 22);
console.log(result.a); // Output: 11
console.log(result.b); // Output: 23

let a = 1;
let b = 2.2;
console.log(H(a, b)); // Output: { a: 2, b: 3.2 }
*/
///////////////////////////////////////////