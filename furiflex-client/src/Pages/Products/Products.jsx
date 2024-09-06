import { Link } from "react-router-dom";
import chair from "../../assets/Blank-bamboo.png";

const Products = () => {
    const id = 3;
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
          <div className="border p-4 rounded-lg shadow">
            <Link to={`/product-details/${id}`}>
              <img
                src={chair}
                alt="Recliner Chair Wood"
                className="w-full h-40 object-cover mb-4 hover:scale-105 duration-300 transition-all"
              />
              <h3 className="text-lg font-semibold">Recliner Chair Wood</h3>
            </Link>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-red-500">€299.00</p>
              <p className="text-gray-600 line-through">€350.00</p>
              <p className="text-sm text-green-500">30% OFF</p>
            </div>
            <p className="text-gray-400 text-sm ">
              It has a backrest that can be tilted back, and often a footrest
              extended
            </p>
            <button className="mt-4 bg-black text-white py-2 px-4 w-full rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products */}
          <div className="border p-4 rounded-lg shadow">
            <img
              src={chair}
              alt="Timber Ride Padded"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Timber Ride Padded</h3>
            <p className="text-gray-600 line-through">€75.00</p>
            <p className="text-xl font-bold text-red-500">€59.00</p>
            <p className="text-sm text-green-500">30% OFF</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
          {/* Add more products as needed */}
        </div>
      </div>
    </div>
  );
};

export default Products;
