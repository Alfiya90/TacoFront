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
import {getToken, setAuthParam} from "./reducers/authReduscer";
import ProtectedRoute from "./auth/ProtectedRoute";
import {api, auth, setToken} from "./api/api";


function App(props) {
    const onSubmit = (tacosOrder) => {
        props.orderDataAC(tacosOrder)
        let ingredientsList = Object.entries(props.creatingTaco).filter(ingredient => ingredient[1] === true)
            .map(id => {
                return id[0]
            })
        let name = props.creatingTaco.tacoName;
        tacosOrder.tacos = [{name, ingredientsList}]
        const data = tacosOrder;
        api.sendTaco(data)
            .then(response => {
                 console.log(response)
        })
    }

    const onSubmitRegistrForm = (regform) => {
        auth.registration(regform)
            .then(response => {
                console.log(response)
        })
    }

    const onSubmitLoginForm = (data) => {

        axios.post('http://localhost:8080/authenticate', data)
            .then(response => {
                console.log(response.data.token)
                props.getToken(response.data)
                props.setAuthParam()
                setToken()
        })/*
        auth.authenticate(data).then(response => {
            console.log(response.data)
            props.getToken(response.data)
            debugger
            props.setAuthParam()
        })*/


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
                        <Route path = "/create" element = {<ProtectedRoute>
                                                                    <CreateTacoContainer/>
                                                            </ProtectedRoute>}/>
                        <Route path =  "/order" element = {<ReduxOrderForm onSubmit = {onSubmit} />}/>
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
        creatingTaco: state.createTacoPage.creatingTaco,
        token: state.auth.token,
        isAuth: state.auth.isAuth

}



}
export default connect(mapStateToProps, {orderDataAC, getToken, setAuthParam})(App);
