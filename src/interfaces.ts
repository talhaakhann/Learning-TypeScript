// An interface defines the shape (structure) of an object.
// Use interface when you're describing the shape of an object, especially if it may be extended or implemented by classes.
// Use type for unions, intersections, tuples, primitive aliases, and other non-object type compositions.
//If you declare the same interface multiple times, TypeScript automatically combines them.
/*The keyword implements means:

"This class promises to follow the structure defined by an interface."

Think of an interface as a contract.*/

interface User {
  name: string;
  age: number;
  greet(): void;
}

const user: User = {
  name: "Talha",
  age: 20,
  greet() {
    console.log("Hello");
  },
};

interface Animal {
  speak(): void;
}

//Literal types

type Category="Electronics"|"Cosmatics"|"Toys"

class dog implements Animal {
  speak(): void {
    console.log("Woof");
  }
}

type Student = {
  rollNo: number;
};

type Person = {
  name: string;
};

type User1 = Student & Person;


type Config={
    readonly appName:string
    version:number
}

const config:Config={
    appName:"Talha's app",
    version:1.0
}


