import axios from "axios";

const SingleProduct = async ({ params }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product-details/${params.id}`)
        return response.data; // Return the product data
      } catch {
        throw new Error("Failed to load product details.");
      }
    };

export default SingleProduct;