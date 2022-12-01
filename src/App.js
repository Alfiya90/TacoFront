import classes from './App.module.css';
import {Header} from "./component/Header";
import {Main} from "./component/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateTacoForm} from "./component/CreateTaco";
import CreateTacoContainer from "./component/CreateTacoContainer";
import {OrderForm, ReduxOrderForm} from "./component/OrderForm";
import {useNavigate} from "react-router";
import axios from "axios";
import {connect} from "react-redux";
import {orderDataAC} from "./reducers/createTacoReducer";

function App(props) {

    const onSubmit = (order) => {
        console.log(order)
        props.orderDataAC(order)
       /* axios.post("http://localhost:8080/design/ingredients", order).then(response =>
            {console.log(response)}
        )*/
        axios.post("http://localhost:8080/orders", order).then(response =>
            {console.log(response)}
        )

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
                        <Route path="/create" element = {<CreateTacoContainer />}/>
                        <Route path =  "/order" element = { <ReduxOrderForm onSubmit = {onSubmit} /> }/>
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
        orderData: state.createTacoPage.orderData,

}



}
export default connect(mapStateToProps, {orderDataAC})(App);
