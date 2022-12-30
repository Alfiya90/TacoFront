import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../validators/validatorsForm";



const maxLengthName = maxLengthCreator(30)
const minLengthName = minLengthCreator(2)
export const OrderForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <h3>Deliver me taco materpieces to...</h3>
                    Name: <Field component={"input"} name={'deliveryName'} />
                    <br/>
                    Street address: <Field component={"input"} name={'deliveryStreet'} />
                    <br/>
                    City: <Field component={"input"} name={'deliveryCity'} />
                    <br/>
                    State: <Field component={"input"} name={'deliveryState'} />
                    <br/>
                    Zip code: <Field component={"input"} name={'deliveryZip'} />
                </div>
                <div>
                    <h3> Here's how I'll pay</h3>
                    <br/>
                    Credit Card #: <Field component={"input"} name={'ccNumber'} />
                    <br/>
                    Expiration: <Field component={"input"} name={'ccExpiration'} />
                    <br/>
                    CVV: <Field component={"input"} name={'ccCVV'}/>
                </div>
                <button onClick = {props.onSubmit}>Submit order</button>

            </div>
        </form>
    )
}

  export const ReduxOrderForm = reduxForm({
      form: 'orderForm'
  })(OrderForm)

