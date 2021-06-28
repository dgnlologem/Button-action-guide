import styled from "styled-components";

export const Button = styled.button`
  width:61px;
  padding:3px 5px 3px 0;
  cursor:pointer;
  background-color: transparent; 
  display:flex;
  flex-direction: row;
  align-items: center;
  border:0;

  @media screen and (min-width:480px) {
    width:57px;
    padding:4px 4px 4px 0;
    &:hover {
      background-color:rgba(0, 0, 0, 0.1);
    }
  }
  &:active {
    background-color:rgba(0, 0, 0, 0.1);
  }
  
`;

export const Img=styled.img`
  width:20px;
  height:20px;
  object-fit: contain;

  @media screen and (min-width:480px) {
    width:17px;
    height:17px;
  }
`;

export const Text = styled.p`
  color:${(props)=>props.textColor};
  margin:3px 0 0 3px;
  font-family: 'AppleSDGothicNeo';
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.41px;
  font-size:14px;

  @media screen and (min-width:480px) {
    margin:0 0 0 3px;
  }
`;