import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCartData from "../../Hooks/useCartData";

const Home = () => {
  const { products, isLoading } = useProducts();
  const { cart, refetch: refetchCart } = useCartData(); // Fetch cart data
  const [filteredData, setFilteredData] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  
  console.log("Filtered Category:", cart);
  
  // Creating a unique list of categories
  const categoryArray = Array.from(new Set(products?.map((product) => product.category)));

  // Function to handle adding items to cart
  const handleAddCart = (id, image, name, price) => {
    const email = user?.email;

    // Check if the item already exists in the cart
    const existingCartItem = cart.find((item) => item._id === id);
    console.log('exiting ', existingCartItem)

    if (user && user.email) {
      if (existingCartItem) {
        // If the item exists, update the quantity
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1, // Increase the quantity
        };

        axiosPublic
          .put(`/carts/${existingCartItem.id}`, updatedCartItem) // Update the cart item quantity
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} quantity updated in your cart`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetchCart(); // Refetch cart data to update the UI
            }
          })
          .catch((err) => console.log(err));
      } else {
        // If the item doesn't exist in the cart, add it
        const newCartItem = {
          name,
          image,
          price,
          email,
          quantity: 1, // Set initial quantity to 1
        };

        axiosPublic
          .post("/carts", newCartItem)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} added to your cart`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetchCart(); // Refetch cart data to update the UI
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      // If the user is not logged in, redirect to the login page
      Swal.fire({
        title: "You are not logged in",
        text: "Do you want to log in?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in", { state: { from: location }, replace: true });
        }
      });
    }
  };

  // Function to handle category selection and filtering products
  const handleCategory = (category) => {
    const filterData = products?.filter((item) => item.category === category);
    setFilteredData(filterData);
  };

  // Show a loading state while products are being fetched
  if (isLoading) return <Loader />;

  return (
    <div className="flex">
      {/* Category Menu */}
      <div className="w-1/4 h-screen bg-gray-100 p-4 sticky top-0">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categoryArray.map((category, index) => (
            <li
              className="whitespace-nowrap py-2 hover:text-primary cursor-pointer border-b-2"
              onClick={() => handleCategory(category)}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Display */}
      <div className="w-3/4 p-4 overflow-y-scroll nos h-screen">
        <div className="grid grid-cols-3 gap-6">
          {/* Display filtered products if a category is selected, otherwise show all products */}
          {(filteredData.length > 0 ? filteredData : products)?.slice(0, 6).map((item, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow">
              <Link to={`/product-details/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-4 hover:scale-105 duration-300 transition-all"
                />
                <h3 className="text-base my-2 font-semibold">{item.name}</h3>
              </Link>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-red-500">€{item.price}</p>
                <p className="text-gray-600 line-through">€{item.original_price}</p>
                <p className="text-sm text-green-500">{item.discount}</p>
              </div>
              <p className="text-gray-400 text-sm my-2">{item.description}</p>
              <button
                onClick={() => handleAddCart(item._id, item.image, item.name, item.price)}
                className="mt-4 bg-black text-white py-2 px-4 w-full rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div className="text-center my-10">
          <button>Pagination</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
