import React from "react"
import styled from "styled-components";

function Container(props){
    return(
        <Wrapper>{props.children}</Wrapper>
    )
}

export default Container;

export const Wrapper = styled.div`
  width:100%;
  height:300px;
  background-color: #d8d8d8;
  display:flex;
  justify-content: center;
  align-items: center;
`;