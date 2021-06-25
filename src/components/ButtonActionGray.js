import React from "react"
import styled from "styled-components";

function ButtonActionGray(){

    return(
        <Button>Button</Button>
    )
}

export default ButtonActionGray;

export const Button = styled.button`
  padding:15px 44px 14px;
  background-color: #f2f2f2;
  font-family: 'AppleSDGothicNeo';
  font-size:15px;
  font-weight: bold;
  color:#000000;
  text-align: center;
  letter-spacing: -0.44px;
  border-radius:3px;
  border:0px;
  box-sizing: border-box;
  cursor:pointer;

  &:active {
    background-color:#e8e8e8;
  }
  @media screen and (min-width: 480px) {
    &:hover {
      background-color:#e8e8e8;
    }
  }
`;