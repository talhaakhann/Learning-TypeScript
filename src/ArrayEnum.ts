// Array in ts

const icecreamFlavors: string[] = ["vanilla", "chocolate", "strawberry"];

const icecreamPrice:readonly number[] = [405, 450, 420];

type IceCream = {
  name: string;
  price: number;
};

const Menu: IceCream[] = [
  {
    name: "vanilla",
    price: 405,
  },
  {
    name: "chocolate",
    price: 450,
  },
];

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

//A tuple in TypeScript is a special kind of array where the number of elements and the type of each element are fixed and known in advance.
//Basic Tuple in ts

let person: [string, number] = ["Talha", 20];

console.log(person[0]); // Talha
console.log(person[1]); // 20


//Destructuring a Tuple

function getUser(): [string, number] {
  return ["Talha", 20];
}

const [name, age] = getUser();

console.log(name); // Talha
console.log(age);  // 20

// Named Tuple 
//The names (name, age) are for readability only.
type User = [name: string, age: number];

const user: User = ["Talha", 20];

console.log(user[0]); // Talha

// Readonly Tuple
const point: readonly [number, number] = [10, 20];

// point[0] = 30;  Error

//Enum = a group of named constant values.

enum IceCreamSize{
    LARGE,
    MEDUIM,
    SMALL
}

console.log(IceCreamSize.LARGE);


// Custom numeric values
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.Success); // 200

// String enums

// These are more common in modern applications because they're easier to read.

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const role = Role.Admin;

console.log(role);