import React from "react";
import {useNavigate} from "react-router";


export const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <a onClick={() => {navigate("/create")}}>Create your Taco</a>
        </div>
    )
}