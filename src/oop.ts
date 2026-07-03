class User {
  private password = "123456";

  showPassword() {
    console.log(this.password);
  }
}

const user = new User();

// console.log(user.password); // ❌ Error

class Product {
  static getProductName = "abc product";
  Product(name: string) {}
}

console.log(Product.getProductName);

class Heater {
  heat() {}
}

class CoffeeMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}

// Static members belong to the class itself, not individual objects.
// No need to create an object.

class MathUtil {
  static PI = 3.14;

  static square(x: number) {
    return x * x;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));

class User1 {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}

const user1 = new User1(1,'Talha');

// user.id = 2; // ❌ Error

// readonly properties can only be assigned during initialization.
