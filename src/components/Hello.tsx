import React from "react";

function Hello(props : {name:string,age:number}){
    return(
        <h2>Hello, {props.name}!</h2>
    )
}

export default Hello;