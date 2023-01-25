import React from "react";
import axios from "axios";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import classes from "./CreateTaco.module.css"
import {useNavigate} from "react-router";
import {LoginFormRedux} from "../auth/Loginform";

export const CreateTaco = (props) => {

    let navigate = useNavigate()
    const send = (taco) => {

       /* axios.post("http://localhost:8080/design")*/
        props.createTaco(taco)
        let tacos= Object.entries(props.creatingTaco).filter(ingredient => ingredient[1] == true)
            .map(id => {return id[0]})
        console.log("222222222", tacos)
        let name = props.creatingTaco.tacoName
        console.log(name)
    }
    if (props.ingredients.length == 0 ){
        return <div>
            Loading...
        </div>
    } else {
        let wrap =  props.ingredients.filter(ingredient => ingredient.type == "WRAP").map(item =>
            (<Wrap key = {item.id}  id = {item.id}name = {item.name}/>))
        let cheese = props.ingredients.filter(ingredient => ingredient.type == "CHEESE").map(item =>
            (<Cheese key = {item.id} id = {item.id} name = {item.name}/>))
        let sauce = props.ingredients.filter(ingredient => ingredient.type == "SAUCE").map(item =>
            (<Sauce key = {item.id} id = {item.id} name = {item.name}/>))
        let protein = props.ingredients.filter(ingredient => ingredient.type == "PROTEIN").map(item =>
            (<Protein key = {item.id} id = {item.id} name = {item.name}/>))
        let veggies = props.ingredients.filter(ingredient => ingredient.type == "VEGGIES").map(item =>
            (<Veggies  key = {item.id} id = {item.id} name = {item.name}/>))
        return <div className={classes.text}>
            {/*<form>*/}
            {/*<h3>Designate your wrap:</h3>
                        {wrap}
                      <h3>Choose your cheese:</h3>
                        {cheese}
                      <h3>Select your sauce:</h3>
                        {sauce}
                      <h3>Pick your protein:</h3>
                        {protein}
                      <h3>Determine your veggies:</h3>
                        {veggies}
                      <div className={classes.submit}>
                          <h2>Name your taco creation</h2>
                          <input></input>
                          <div className={classes.but}>
                              <button onSubmit = {onSubmit} >Submit your taco</button>
                          </div>
                      </div>*/}
            <TacoReduxForm onSubmit = {send} wrap = {wrap} cheese = {cheese} sauce = {sauce} protein = {protein} veggies = {veggies}></TacoReduxForm>
            <button onClick={() => {navigate('/order')}}>Оформить заказ</button>
            {/*</form>*/}
        </div>
    }
}




export const Wrap = (props) => {
    return(
        <div>
                <Field type={'checkbox'} name={props.id} component={'input'}/>{props.name}
        </div>
    )
}
export const Cheese = (props) => {
    return(
        <div>
                <Field type={'checkbox'} name={props.id} component={'input'}/>{props.name}
        </div>
    )
}
export const Sauce = (props) => {
    return(
        <div>
                <Field type={'checkbox'} name={props.id} component={'input'}/>{props.name}
        </div>
    )
}
export const Protein = (props) => {
    return(
        <div>
                <Field type={'checkbox'} name={props.id} component={'input'}/>{props.name}
        </div>
    )
}
export const Veggies = (props) => {
    return(
        <div>
                <Field type={'checkbox'} name={props.id} component={'input'}/>{props.name}
        </div>
    )
}


const TacoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Designate your wrap:</h3>
            {props.wrap}
            <h3>Choose your cheese:</h3>
            {props.cheese}
            <h3>Select your sauce:</h3>
            {props.sauce}
            <h3>Pick your protein:</h3>
            {props.protein}
            <h3>Determine your veggies:</h3>
            {props.veggies}
            <div>
                <h2>Name your taco creation</h2>
                <Field component = {'input'} name = {"tacoName"}/>
                <div className={classes.but}>
                    <input type={"submit"} value = {"Submit your taco "} />
                </div>
            </div>
        </form>
    )
}
export  const TacoReduxForm = reduxForm({
    form: "createTaco"
    }
)(TacoForm)






/*
export  const WrapForm = reduxForm({
    form: "wrap"
    })(Wrap)
export  const CheeseForm = reduxForm({
    form: "wrap"
})(Cheese)
export  const SauceForm = reduxForm({
    form: "sauce"
})(Sauce)
export  const ProteinForm = reduxForm({
    form: "protein"
})(Protein)
export  const VeggiesForm = reduxForm({
    form: "veggies"
})(Veggies)
*/

