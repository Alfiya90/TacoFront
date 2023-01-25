import React from "react";
import {Field, reduxForm} from "redux-form";
import {useNavigate} from "react-router";
import {connect} from "react-redux";

const LoginForm = (props) => {
    let navigate = useNavigate();
    if (!props.isAuth){
        return <form onSubmit={props.handleSubmit}>

            Login: <Field component={'input'} name = {'username'}></Field>
            <br/>
            Password: <Field component={'input'} name = {'password'}></Field>
            <br/>
            <button onClick = {props.onSubmit}>Send</button>
            <br/>
        </form>
    } else {
        return <div>
            <div>Вы авторизованы</div>
            <div>Создайте свой заказ</div>
            <br/>
            <button onClick={() => {navigate('/create')}}></button>
        </div>
    }

}

export const LoginFormRedux = reduxForm({
    form: "login"
})(LoginForm)

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(LoginFormRedux)
