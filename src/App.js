import logo from './logo.svg';
import './App.css';
import ButtonAction from "./components/ButtonAction";
import styled from "styled-components"
import ButtonActionGray from "./components/ButtonActionGray";

function App() {
  return (
    <Container >
     <ButtonActionGray/>
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
    `
;
