import React from "react"
import styled from "styled-components";

function ButtonAction(props){
    return(
        <Button onClick={props.onClick}>Button</Button>
    )
}

export default ButtonAction

export const Button = styled.button`
  padding:15px 44px 14px;
  background-color: #000000;
  font-family: 'AppleSDGothicNeo';
  font-size:15px;
  font-weight: bold;
  color:#fff;
  text-align: center;
  letter-spacing: -0.44px;
  border-radius:3px;
  border:0px;
  box-sizing: border-box;
  cursor: pointer;

  &:active {
    background-color:#383838;
  }
  @media screen and (min-width: 480px) {
    &:hover {
      background-color:#383838;
    }
  }
  
`;