import React from "react"
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ButtonActionGray from "../components/ButtonActionGray";

export default{
    title:'ButtonAction',
    component:ButtonActionGray,
    decorators:[withKnobs]
}

export const BasicButtonActionGray = ()=>{
    return(
        <ButtonActionGray  textColor={text('textColor','#000000')} backgroundColor={text('backgroundColor','#f2f2f2')} hoverColor={text('hoverColor',"#e8e8e8")} text={text('text','Button')} onClick={action('onClick')}/>
    )
}