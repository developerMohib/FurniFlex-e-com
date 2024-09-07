import { useState } from "react";
import chair from "../../assets/Isolated-wooden.png";
import useProducts from "../../Hooks/useProducts";

const Cart = () => {
  const {data} = useProducts()

  const pData = [
    {
      id: 1,
      name: "Recliner Chair Steel",
      price: 299.0,
      quantity: 1,
      image: "recliner-chair-steel.jpg",
    },
    {
      id: 2,
      name: "Gaming Chair",
      price: 249.0,
      quantity: 1,
      image: "gaming-chair.jpg",
    },
    {
      id: 3,
      name: "Timber Ride Padded",
      price: 59.0,
      quantity: 1,
      image: "timber-ride-padded.jpg",
    },
    {
      id: 4,
      name: "Isolated Wooden Rock",
      price: 165.0,
      quantity: 1,
      image: "isolated-wooden-rock.jpg",
    },
    {
      id: 5,
      name: "Colored Wooden Chair",
      price: 299.0,
      quantity: 1,
      image: "colored-wooden-chair.jpg",
    },
  ]

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Recliner Chair Steel",
      price: 299.0,
      quantity: 1,
      image: "recliner-chair-steel.jpg",
    },
    {
      id: 2,
      name: "Gaming Chair",
      price: 249.0,
      quantity: 1,
      image: "gaming-chair.jpg",
    },
    {
      id: 3,
      name: "Timber Ride Padded",
      price: 59.0,
      quantity: 1,
      image: "timber-ride-padded.jpg",
    },
    {
      id: 4,
      name: "Isolated Wooden Rock",
      price: 165.0,
      quantity: 1,
      image: "isolated-wooden-rock.jpg",
    },
    {
      id: 5,
      name: "Colored Wooden Chair",
      price: 299.0,
      quantity: 1,
      image: "colored-wooden-chair.jpg",
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <div className="container mx-auto p-4 md:flex md:space-x-4">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-4">
          An overview of your order
        </h2>
        <div className="bg-gray-50 rounded-lg shadow-md">
          {pData?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleDecrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleIncrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>{" "}
                  <img
                    src={chair}
                    alt={item.name}
                    className="w-16 h-16 rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                </div>
              </div>
              <div>
                <div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    &times;
                  </button>
                </div>
                <div>
                  <p className="text-sm text-secondary font-semibold">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 mt-4 md:mt-0">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Order details</h2>
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Tax</span>
              <span>-</span>
            </div>
            <div className="flex justify-between mt-4 font-semibold text-lg">
              <span>Total</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <button
              className="bg-black text-white w-full py-3 mt-6 rounded"
              onClick={handleCheckout}
            >
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
