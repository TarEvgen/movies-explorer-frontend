import { Navigate } from 'react-router-dom';

function ProtectedRoute({element: Component, ...props}) {
    console.log(props.isLoggedIn, "props.isLoggedIn")
    return (
        props.isLoggedIn ? <Component{...props} /> : <Navigate to='/sign-in' replace />
    )
}

export default ProtectedRoute;