import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const tokenExists = () => {
       const token = localStorage.getItem("token");
        if (token) {
            return true
        } else {
            return false
        }
    }

    if(tokenExists()){
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;