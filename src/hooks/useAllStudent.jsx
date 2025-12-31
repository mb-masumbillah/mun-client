import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllStudent = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allStudent = [], isPending: isloading, refetch } = useQuery({
        queryKey: ["student"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student`)
            return res.data
        },
        staleTime: 0,
    });

    return [allStudent, isloading, refetch];
}

export default useAllStudent;