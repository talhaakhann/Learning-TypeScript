"Type narrowing in TypeScript means reducing a variable from a broad type to a more specific type so TypeScript knows exactly what methods and properties are available.";

"I know this variable could be several types. Let me check which one it actually is.";

function print(value: string | number) {
  if (typeof value == "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
  if (animal instanceof Cat) {
    animal.meow();
  }
}

//Custom type defining

type ProductObj = {
  type: String;
  price: Number;
};

function isProductObj(obj: any): obj is ProductObj {
  return (
    typeof obj == "object" &&
    obj !== null &&
    typeof obj.type == "string" &&
    typeof obj.number == "number"
  );
}

function isServeOrder(item:ProductObj | string){
    if(isProductObj(item)){
        return `Serving ${item.type}`
    }
}

function isStringArray(array:unknown):array is string[]{
    return (
       
    )
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

function greet(name?:string){
    if(name){
        console.log(name);
        
    }
}