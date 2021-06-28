import React from "react"
import {Button,Img} from "./ImageBoxStyled";
import PropTypes from "prop-types";

function ImageBox(props){
    return(
        <Button onClick={props.onClick}>
            <Img src={props.src} alt={props.alt}></Img>
        </Button>
    )
}

ImageBox.propTypes={
    src:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    alt:PropTypes.string.isRequired,
}

export default ImageBox

