import React from "react"
import PropTypes from "prop-types"
import {Text ,Img,Button} from "./BackButtonStyled";

function BackButton(props){
    return(
        <Button onClick={props.onClick}>
            <Img src={"/icon-back.png"} alt={'back'}></Img>
            <Text textColor={props.textColor}>BACK</Text>
        </Button>
    )
}

BackButton.propTypes={
    onClick:PropTypes.func.isRequired,
    textColor:PropTypes.string
}

BackButton.defaultProps={
    textColor:'#ffffff',
}

export default BackButton;

