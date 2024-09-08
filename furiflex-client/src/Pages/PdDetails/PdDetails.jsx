import useCartData from "../../Hooks/useCartData";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Heading from "../../components/Heading/Heading";

const PdDetails = () => {
  const product = useLoaderData();
  const {
    category,
    description,
    discount,
    image,
    name,
    original_price,
    price,
  } = product;

  const { refetch } = useCartData();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const email = user?.email;
  const handleAddCart = (image, name, price) => {
    const cartItem = {
      name,
      image,
      price,
      email,
    };

    axiosPublic
      .post("/carts", cartItem)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-100">
      <Heading routeName={"Product Details"} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={image}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <small> category : {category} </small>
            <h2 className="text-3xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${price} </span>
              <span className="text-gray-500 mx-2 line-through">
                ${original_price}
              </span>
              <small className="text-red-600"> {discount} </small>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-6 ${
                    i < 4 ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              onClick={() => handleAddCart()}
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdDetails;
