import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (page =1) => {
  const axiosPublic = useAxiosPublic()
console.log('page', page)
  // fetching data
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["product",page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?page=${page}`);
      return res.data;
    },
  });
  return { products, isLoading, refetch };

};

export default useProducts;
