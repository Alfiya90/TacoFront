import React from "react";
import {useNavigate} from "react-router";
import classes from "./Header.module.css"

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className = {classes.central}>
                <a onClick = {() => {navigate("/create")}}> Create your Taco </a>
            </div>
            <div className={classes.myRightLink}>

                    <a className = {classes.myLink} onClick={() => {navigate(("login"))}}> Login </a>
                    <a onClick = {() => {navigate("registration")}}> Registration </a>



            </div>
        </div>

    )
}