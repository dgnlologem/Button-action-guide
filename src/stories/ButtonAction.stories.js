import React from "react"
import ButtonAction from "../components/ButtonAction";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default{
    title:'ButtonAction',
    component:ButtonAction,
    decorators:[withKnobs]
}

export const BasicButtonAction = ()=>{
    return(
        <ButtonAction  textColor={text('textColor','#ffffff')} backgroundColor={text('backgroundColor','#000000')} hoverColor={text('hoverColor',"#383838")} text={text('text','Button')} onClick={action('onClick')}/>
    )
}