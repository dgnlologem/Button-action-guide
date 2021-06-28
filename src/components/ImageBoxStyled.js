import styled from "styled-components"

export const Button = styled.button`
  width:48px;
  height:48px;
  background-color:#ffffff;
  border:0;
  border-radius:3px;
  padding:12px;
  cursor: pointer;

  @media screen and (min-width:480px) {
    &:hover {
      background-color:#ededed;
    }
  }
  
  &:active {
    background-color:#ededed;
  }
  
  
`;

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: contain;
`;