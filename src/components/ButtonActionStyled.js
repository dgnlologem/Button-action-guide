import styled from "styled-components";

export const Button = styled.button`
  min-width:132px;
  padding:15px 44px 14px;
  background-color: ${(props)=>props.backgroundColor};
  font-family: 'AppleSDGothicNeo';
  font-size:15px;
  font-weight: bold;
  color:${(props)=>props.textColor};
  text-align: center;
  letter-spacing: -0.44px;
  border-radius:3px;
  border:0px;
  box-sizing: border-box;
  cursor: pointer;

  &:active {
    background-color:${(props)=>props.hoverColor};
  }
  @media screen and (min-width: 480px) {
    &:hover {
      background-color:${(props)=>props.hoverColor};
    }
  }
  
`;