import React from "react"
import ImageBox from "../components/ImageBox";
import {text, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import Container from "./Container";

export default {
    title:"ImageBox",
    components:ImageBox,
    decorators:[withKnobs]
};

export const BasicImageBox = () =>{
    return(
        <Container>
            <ImageBox src={text('src',"/icon-avatarsetting.png")} alt={text('alt','alt')} onClick={action('onClick')}/>
        </Container>
    )
}