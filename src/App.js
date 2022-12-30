import classes from './App.module.css';
import {Header} from "./component/Header";
import {Main} from "./component/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateTacoContainer from "./component/CreateTacoContainer";
import { ReduxOrderForm} from "./component/OrderForm";
import axios from "axios";
import {connect} from "react-redux";
import {orderDataAC} from "./reducers/createTacoReducer";
import {RegistrationFormRedux} from "./auth/RegistrationForm";
import {LoginFormRedux} from "./auth/Loginform";
import {useNavigate} from "react-router";

function App(props) {


    const onSubmit = (tacosOrder) => {
        console.log(tacosOrder)
        props.orderDataAC(tacosOrder)
        let ingredientsList= Object.entries(props.creatingTaco).filter(ingredient => ingredient[1] === true)
                                .map(id => {return id[0]})
                let name = props.creatingTaco.tacoName;
        tacosOrder.tacos = [{name, ingredientsList}]

        const data= tacosOrder ;
        axios.post("http://localhost:8080/orders",  data ).then(response =>
            {console.log(response)}
        )
    }

    const onSubmitRegistrForm = (regform) => {

        axios.post("http://localhost:8080/register", regform).then(response =>
        {console.log(regform)})
    }

    const onSubmitLoginForm = (data) => {
        axios.post('http://localhost:8080/login', data).then(response => {

        })

    }

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <div className={classes.appHeader}>
                    <Header/>
                </div>
                <div>
                    <Routes>
                        <Route path= {"/"} element = {<Main/>}/>
                        <Route path = "/create" element = {<CreateTacoContainer />}/>
                        <Route path =  "/order" element = { <ReduxOrderForm onSubmit = {onSubmit} /> }/>
                        <Route path = "/registration" element = {<RegistrationFormRedux onSubmit = {onSubmitRegistrForm}/>}/>
                        <Route path = "/login" element = {<LoginFormRedux onSubmit = {onSubmitLoginForm} />}></Route>
                    </Routes>
                </div>
                <div className={classes.appHeader}>
                    Контакты
                </div>
            </div>
        </BrowserRouter>
    );
}
let mapStateToProps = (state) => {
    return{
        creatingTaco: state.createTacoPage.creatingTaco


}



}
export default connect(mapStateToProps, {orderDataAC})(App);
