import React from "react";
import taco from "../resurses/taco.jpg"
import classes from "./Main.module.css"
export const Main = () => {
    return (
        <div >
            <img className={classes.img} src = {taco}/>
        </div>
    )
}