import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {connect} from "react-redux";
import {setAuthParam} from "../reducers/authReduscer";



 const ProtectedRoute = ({isAuth, children}) => {
    let navigate = useNavigate();
       useEffect(() => {
           if(!isAuth){
               console.log(isAuth)
           navigate('/login', {replace:true})
       }
       })
    return children;
}
let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, setAuthParam)(ProtectedRoute)