import logo from './logo.svg';
import './App.css';
import ButtonAction from "./components/ButtonAction";
import styled from "styled-components"
import ButtonActionGray from "./components/ButtonActionGray";
import XButton from "./components/XButton";
import BackButton from "./components/BackButton";
import ImageBox from "./components/ImageBox";
import NextBackButton from "./components/NextBackButton";

function App() {

    function click(){
        console.log('wewe')
    }

  return (
    <Container >
        <ButtonAction text={'Button'} onClick={click} />
    </Container>
  );
}

export default App;

export const Container =styled.div`
  width:100vh;
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
    `
;
