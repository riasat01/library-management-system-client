import axios from "axios";
import { useContext, useEffect } from "react";
import { UserAuth } from "../auth-provider/AuthProvider";
import swal from 'sweetalert';


const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
    // withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext( UserAuth );

    useEffect(() => {
        AxiosSecure.interceptors.response.use( res => {
            return res;
        }, error => {
            console.log('Error intercepted', error?.response);
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logOut()
                    .then(() => swal(`Info`, `You've sign out successfully`, 'info'))
                    .catch(error => swal('Error', `${error?.message}`, 'error'));
            }
        })
    }, [])
    return AxiosSecure;
}

export default useAxiosSecure;