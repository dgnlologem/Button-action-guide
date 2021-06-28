import styled from "styled-components"

export const NextButton =styled.button`
  width:67px;
  background-color: transparent;
  padding:${(props)=>props.direction === 'next' ? '4px 3px' : '4px 4px 4px 3px'};
  border:0;
  display:flex;
  flex-direction: ${(props)=>props.direction==='next' ? 'row' : 'row-reverse'};
  align-items: center;
  cursor:pointer;

  &:active {
    background-color:#f7f7f7;
  };

  @media screen and (min-width:480px) {
    width:31px;
    flex-direction:column-reverse;
    padding:4px 2px 0;
    
    &:hover {
      background-color:#f7f7f7;
    }
  };
`;

export const Text = styled.p`
  font-family: 'AppleSDGothicNeo';
  font-size: 15px;  
  font-weight: 500;
  letter-spacing: -0.44px;
  margin: ${(props)=>props.direction==='next' ? '0 5px 0 0' : '0 0 0 5px'};
  color: ${(props)=>props.direction ==='next' ? '#000000' : '#bebebe'};
  
  @media screen and (min-width:480px) {
    font-size: 12px;
    letter-spacing: -0.35px;
    margin: 8px 0 0;
    color: #bebebe;
  }
`;


export const MobileImg = styled.img`
  width:22px;
  height:22px;
  object-fit: contain;
  display:inline-block;
  
  @media screen and (min-width:480px) {
   display:none;
  };
  
`;

export const LaptopImg = styled.img`
  display:none;
  
  @media screen and (min-width:480px) {
    display:inline-block;
    width:12px;
    height:24px;
  };
  
`;