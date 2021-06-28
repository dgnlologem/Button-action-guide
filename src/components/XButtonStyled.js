import styled from "styled-components";


export const Button = styled.button`
  width:24px;
  height:24px;
  background-color: transparent;
  border:0px;
  padding:2px;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  };
  
  @media screen and (min-width:480px) {
    width:21px;
    height:21px;
    
    &:hover{
      background-color: rgba(0, 0, 0, 0.1);
    };
    
  };
  
`;

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: contain;
`;