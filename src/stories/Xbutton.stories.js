import React from "react"
import XButton from "../components/XButton";
import Container from "./Container";

export default {
    title:"Xbutton",
    components:XButton
}

export const BasicXButton = ()=>{
    return(
        <Container><XButton/></Container>

    )
}