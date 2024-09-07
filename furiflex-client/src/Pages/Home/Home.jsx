import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
const Home = () => {
  const { data } = useProducts();
  console.log("data", data);
  const id = 2;

  return (
    <div className="flex">
      {/* Category Menu */}
      <div className="w-1/4 h-screen bg-gray-100 p-4 sticky top-0">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Furniture
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Outdoor
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Office
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home Decor
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Electronics
            </Link>
          </li>
        </ul>
      </div>
      {/* Product Display */}
      <div className="w-3/4 p-4 overflow-y-scroll nos h-screen">
        <div className="grid grid-cols-3 gap-6">
          {/* Single Product Card */}

          {data?.map((item, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow">
              <Link to={`/product-details/${id}`}>
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
              <button className="mt-4 bg-black text-white py-2 px-4 w-full rounded">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
