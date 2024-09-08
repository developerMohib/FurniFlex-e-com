import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";


const Products = () => {
  const { products, isLoading, refetch } = useProducts();
  const [filteredData, setFilteredData] = useState([]);
  console.log("filter category", filteredData);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();

  // make a array by filtering data
  let categoryArray = [];
  for (let i = 0; i < products?.length; i++) {
    let cate = products[i].category;

    if (!categoryArray.includes(cate)) {
      categoryArray.push(cate);
    }
  }
  // add to cart
  const email = user?.email ;
  const handleAddCart = (id, image, name, price) => {
    const cartItem = {
      id,
      name,
      image,
      price,
      email
    };
    
    axiosPublic
      .post("/carts", cartItem)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });

    if (user && user?.email) {
      // todo : send data to database
    } else {
      // sweet alert
      Swal.fire({
        title: "You are not logged in",
        text: "Do you want to log in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // category selection
  const handleCategory = async (category) => {
    console.log("Selected:", category);
    // filter data
    const filterData = products?.filter((item) => item.category === category);
    setFilteredData(filterData);
  };

  // is loading
  if (isLoading) return <Loader />;

  
  return (
    <div className="flex">
    <Heading routeName={"Product"} />
      {/* Category Menu */}
      <div className="w-1/4 h-screen bg-gray-100 p-4 sticky top-0">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categoryArray.map((category, index) => (
            <li
              className=" whitespace-nowrap py-2 hover:text-primary cursor-pointer border-b-2"
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
          {/* Single Product Card */}
          {products?.map((item, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow">
              <Link to={`/product-details/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-4 hover:scale-105 duration-300 transition-all"
                />
                <h3 className="text-base my-2 font-semibold"> {item.name} </h3>
              </Link>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-red-500">€{item.price} </p>
                <p className="text-gray-600 line-through">
                  €{item.original_price}
                </p>
                <p className="text-sm text-green-500">{item.discount}</p>
              </div>
              <p className="text-gray-400 text-sm my-2">{item.description}</p>
              <button
                onClick={() =>
                  handleAddCart(item._id, item.image, item.name, item.price)
                }
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

export default Products;
