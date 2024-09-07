import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.base_url,
});
const useAxiosPublic = () => {
  console.log('url ',import.meta.env.base_url)
  return axiosPublic;
};

export default useAxiosPublic;
