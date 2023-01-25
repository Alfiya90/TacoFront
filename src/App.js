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
import {getToken, login, setAuthParam} from "./reducers/authReduscer";
import {type} from "@testing-library/user-event/dist/type";
/*import {ProtectedRoute} from "./auth/ProtectedRoute";*/
import {useNavigate} from "react-router";
import ProtectedRoute from "./auth/ProtectedRoute";


function App (props){
    const onSubmit = (tacosOrder) => {
        console.log(tacosOrder)
        props.orderDataAC(tacosOrder)
        let ingredientsList= Object.entries(props.creatingTaco).filter(ingredient => ingredient[1] === true)
                                .map(id => {return id[0]})
                let name = props.creatingTaco.tacoName;
        tacosOrder.tacos = [{name, ingredientsList}]
        const data= tacosOrder ;
       /* axios.post("http://localhost:8080/orders",  data, {headers:{Authorization: 'Bearer ' + props.token}} ).then(response =>
            {console.log(response)}
        )*/

        /*axios.get("http://localhost:8080/helloadmin",   {headers : {Authorization: JSON.stringify('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2NzM5MTMxMjcsImlhdCI6MTY3Mzg5NTEyN30.lCtHcSY7imLEJIRf4xqyt909YKE-Fw27QzlLhtf6o_AgRak8wDlQsoHPnkeQykTT_XASzEdL0AP6QcSgMyCnFw'
                )}} ).then(response =>
            {console.log(response)})*/


        const authAxios = axios.create({
            baseURL: 'http://localhost:8080/',
            method: 'get',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzQ1NjIxMzMsImlhdCI6MTY3NDU0NDEzM30.gW30AK6lTFbSbPYzaldJ_jh9uuUn68ab9QhMf3KDeUAAgboiqtsEQAdGqn1_yYIa0iaLdeuiTN3RK5DqqybBzQ',
                'Content-Type': 'application/json',
                },

        })

        /*authAxios.defaults.headers.common['Authorization'] =
            'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2NzQyMDI0MjEsImlhdCI6MTY3NDE4NDQyMX0.6P50nwMnosWCPKOTvps2frNi7-t1w2bbXPyBh3fAmSsNfRiegdMsPQerc7zDFNyzXO5dmXQj-7M5kychVCBWXQ';*/
        authAxios.get('design/showingredients').then(response => console.log(response))
    }

    const onSubmitRegistrForm = (regform) => {
        axios.post("http://localhost:8080/registration", regform).then(response =>
        {console.log(response)})
    }

    const onSubmitLoginForm = (data) => {

        axios.post('http://localhost:8080/authenticate', data).then(response => {
            console.log(response.data)
            props.getToken(response.data)
            props.setAuthParam()
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
export default connect(mapStateToProps, {orderDataAC,login, getToken, setAuthParam})(App);
