import React from "react"
import {Button } from "./ButtonActionStyled"
import PropTypes from 'prop-types';


function ButtonAction(props){
    return(
        <Button onClick={props.onClick} backgroundColor={props.backgroundColor} hoverColor={props.hoverColor} textColor={props.textColor}>{props.text}</Button>
    )
}

ButtonAction.propTypes={
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    backgroundColor:PropTypes.string,
    hoverColor:PropTypes.string,
    textColor:PropTypes.string,

}

ButtonAction.defaultProps={
    backgroundColor:'#000000',
    hoverColor:'#383838',
    textColor:'#ffffff',
}
export default ButtonAction

