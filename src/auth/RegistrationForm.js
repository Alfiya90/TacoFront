import React from "react";

import {Field, reduxForm} from "redux-form";

export const RegistrationForm = (props) => {
    return  <form onSubmit = {props.handleSubmit}>
                <h3>Введите данные:</h3>
                <br/>
                Login: <Field name = {'username'} component={'input'}></Field>
                <br/>
                Password: <Field name = {'password'} component={'input'}></Field>
                <br/>
                FullName: <Field name = {'fullName'} component={'input'}></Field>
                <br/>
                Street: <Field name = {'street'} component={'input'}></Field>
                <br/>
                City: <Field name = {'city'} component={'input'}></Field>
                <br/>
                State: <Field name = {'state'} component={'input'}></Field>
                <br/>
                Zip: <Field name = {'zip'} component={'input'}></Field>
                <br/>
                Phone number: <Field name = {'phoneNumber'} component={'input'}></Field>
                <br/>
                <button onClick = {props.onSubmit}>Send</button>
            </form>

}

export const RegistrationFormRedux = reduxForm({
    form: 'registerForm'
})(RegistrationForm);