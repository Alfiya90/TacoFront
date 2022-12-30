import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

                Login: <Field component={'input'} name = {'username'}></Field>
                <br/>
                Password: <Field component={'input'} name = {'password'}></Field>
                <br/>
                <button onClick = {props.onSubmit}>Send</button>
                <br/>
            </form>
}

export const LoginFormRedux = reduxForm({
    form: "login"
})(LoginForm)