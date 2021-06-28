import React from "react"
import {NextButton ,Text,MobileImg,LaptopImg} from "./NextBackButtonStyled";
import PropTypes from "prop-types";

function NextBackButton(props){
    return(
        <NextButton onClick={props.onClick} direction={props.direction}>
            <Text direction={props.direction}>{props.direction ==='next' ? 'NEXT': 'BACK'}</Text>
            <MobileImg src={props.direction==='next' ? '/icon-next-mo.png' : '/icon-back-mo.png'}  alt={props.direction} ></MobileImg>
            <LaptopImg src={props.direction==='next' ? '/icon-right-shop-copy-6.png' : '/icon-right-shop-copy-7.png'} alt={props.direction}></LaptopImg>
        </NextButton>
    )
}



NextBackButton.propTypes={
    direction: PropTypes.oneOf(['next', 'back']).isRequired,
    onClick:PropTypes.func.isRequired
}

export default NextBackButton



