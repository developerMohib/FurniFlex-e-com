import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCartData = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", email],
    queryFn: async () => {
      if (!email) {
        return [];
      }
      const res = await axiosPublic.get(`/carts?email=${email}`);
      return res.data;
    },
    enabled: !!email,
  });
  return {cart, refetch};
};

export default useCartData;
