import React from "react"
import BackButton from "../components/BackButton";
import {text, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import styled from "styled-components";
import Container from "./Container";

export default {
    title:'BackButton',
    component:BackButton,
    decorators:[withKnobs]
};


export const BasicBackButton = () =>{
    return(
        <Container>
            <BackButton textColor={text('textColor','#ffffff')} onClick={action('onClick')}/>
        </Container>
    )
}