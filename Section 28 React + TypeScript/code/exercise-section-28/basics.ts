// primitives: nuber, string, boolean
// more complex: arrays, objects
// primitives
let age: number;
age = 5;

let hobbies: string[] = [ "biking" ];

let person: {
    name: string;
    age: number;
}

person = {
  name: 'x',
  age: 32
};
let people: {
  name: 'x',
  age: 32
}[];

// Type inference
// defines course as text
let course = "Text";

// Using union type
let c: string|number;

// type alias
type Address = {
    zip: number;
    city: string;
    street: string;
}

let address: Address;
let addresses: Address[];

// functions

function add ( a number, b number) : number  {
}

// Generics
function insertAtBeginning<T> ( array : T[], value: T ) {
    const newArray = [value, ...array];
    return newArray;
}
const d = [1,2,3];
const u = insertAtBeginning(d,-1);






