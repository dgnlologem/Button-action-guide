import React from "react"
import NextBackButton from "../components/NextBackButton";
import {text, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title:"NextBackButton",
    component:NextBackButton,
    decorators:[withKnobs]
}

export const NextButton = () =>{
    return(
        <NextBackButton direction={text('direction','next')} onClick={action('onClick')}/>

    )
}

export const BackButton = () =>{
    return(
        <NextBackButton direction={text('direction','back')} onClick={action('onClick')}/>
    )
}