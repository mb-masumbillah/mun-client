import axios from "axios";


const axiosPublic = axios.create({
    //   baseURL: import.meta.env.VITE_SERVER_URL,
    baseURL: 'http://localhost:5000/api'
});


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;