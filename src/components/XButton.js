import React from "react"
import {Button,Img} from "./XButtonStyled";
import PropTypes from "prop-types";

function XButton(props){
    return(
        <Button onClick={props.onClick}>
            <Img src={'/icon-avatarsetting.png'} alt={'나가기'}></Img>
        </Button>
    )
}

XButton.propTypes={
    onClick:PropTypes.func.isRequired
}

export default XButton;

