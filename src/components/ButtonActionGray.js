import React from "react"
import {Button} from "./ButtonActionStyled"
import PropTypes from 'prop-types';

function ButtonActionGray(props){

    return(
        <Button backgroundColor={props.backgroundColor} hoverColor={props.hoverColor} textColor={props.textColor} onClick={props.onClick}>{props.text}</Button>
    )
}

ButtonActionGray.propTypes={
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    backgroundColor:PropTypes.string,
    hoverColor:PropTypes.string,
    textColor:PropTypes.string,
}

ButtonActionGray.defaultProps={
    backgroundColor:'#f2f2f2',
    hoverColor:'#e8e8e8',
    textColor:'#000000',
}

export default ButtonActionGray;

