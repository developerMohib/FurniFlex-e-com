import { useState } from "react";
import useCartData from "../../Hooks/useCartData";
import { RxCross1 } from "react-icons/rx"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Heading from "../../components/Heading/Heading";

const Cart = () => {
  const {cart, refetch} = useCartData();
  const axiosPublic = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            //
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  const [cartItems, setCartItems] = useState([]);

  const handleIncrementQuantity = (id) => {
    setCartItems(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (id) => {
    setCartItems(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <>
    <Heading routeName={"Cart"} />
    <div className="container mx-auto p-4 md:flex md:space-x-4">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-4">
          An overview of your order
        </h2>
        <div className="bg-gray-50 rounded-lg shadow-md">
          {cart?.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleDecrementQuantity(item._id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleIncrementQuantity(item._id)}
                    >
                      +
                    </button>
                  </div>{" "}
                  <img
                    src={item.image}
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
                    onClick={() => handleDelete(item._id)}
                  >
                    <RxCross1 className="text-2xl" />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-secondary font-semibold">
                    €{item.price}
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
              <span>€{subtotal}</span>
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
              <span>€{subtotal}</span>
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
    </>
  );
};

export default Cart;
