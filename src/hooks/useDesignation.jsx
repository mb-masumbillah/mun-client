import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useDesignation = () => {
   const axiosSecure = useAxiosSecure()

  const { data: isDesignation = [], isPending: isloading, } = useQuery({
    queryKey: ["me"],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/user/me`)
        return res.data
    } 
  });

    return [isDesignation, isloading];
};

export default useDesignation;