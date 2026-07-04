// Types splitting

type Address = { street: string; pin: number };

type Item = { id: number; quantity: number };

type Order = {
  name: string;
  id: number;
  // address:Address,
  // Item:Item[]
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

//type Partial Make all properties in T optional

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with: ", updates);
};

updateChai({ price: 25 });

const placeOrder = (order: Required<Order>) => {
  console.log("Order placed: ", order);
};

placeOrder({
  name: "Order01",
  id: 1,
});

"Pick lets you select only certain properties from an existing type."

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, "name" | "email">;

"Omit It removes certain properties from a type."

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


type PublicUser = Omit<User, "password">;
