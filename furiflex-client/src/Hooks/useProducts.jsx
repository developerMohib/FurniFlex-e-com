import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
  const queryClient = useQueryClient()
  const axiosPublic = useAxiosPublic()

  // fetching data
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  return { products, isLoading, refetch };

};

export default useProducts;
