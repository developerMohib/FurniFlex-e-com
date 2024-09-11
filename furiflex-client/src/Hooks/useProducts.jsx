import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (page = 1, category="") => {
  const axiosPublic = useAxiosPublic();
  // fetching data
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", page, category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?page=${page}&category=${category}`);
      return res.data;
    },
  });
  return { products, isLoading, refetch };
};

export default useProducts;
