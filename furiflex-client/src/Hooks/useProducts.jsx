import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return { data };
};

export default useProducts;
