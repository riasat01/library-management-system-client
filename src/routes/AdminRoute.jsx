import { useContext } from "react";
import { UserAuth } from "../auth-provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import useAxiosSecure from "../custom-hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";


const AdminRoute = ({ children }) => {
    const [isAllowed, setIsAllowed] = useState(false);
    const {user,loading} = useContext(UserAuth);
    const location = useLocation();
    // console.log(location.pathname);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/librarian?${user?.email}`)
        .then(res => {
            setIsAllowed(res?.data?.admin);
            console.log(res?.data?.admin)
        })
    }, [])
    if(loading){
        <span className="loading loading-infinity loading-lg"></span>
        return;
    }
    if(user?.email === 'librarian@admin.mail'){
        return children;
    }else{
        swal('Error', 'Only librarian has access of this page', 'error');
        return (
            <>
                <Navigate state={location.pathname} to={`/login`}></Navigate>
            </>
        );
    }
    
};

AdminRoute.propTypes = {
    children: PropTypes.object
}

export default AdminRoute;