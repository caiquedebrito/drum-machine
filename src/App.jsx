import styled from "styled-components"

import { sounds } from "./assets/sounds"
import drumBackground from "./assets/drum-background.jpg"

import { Display } from "./components/Display"
import { DrumMachine } from "./components/DrumMachine"
import { Header } from "./components/Header"
import { DrumPad } from "./components/DrumPad"
import { DrumPadContainer } from "./components/DrumPadContainer"
import { DisplayProvider } from "./context/DisplayContext"

const AppStyled = styled.div`
  min-height: 100vh;
  background: url(${drumBackground}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.7rem;
`

const App = () => {
  return (
    <AppStyled>
      <Header>
        Drum Machine
      </Header>
      <DrumMachine id="drum-machine">
        <DisplayProvider>
          <Display />
          <DrumPadContainer>
          {
            sounds.map((obj, index, currentArray) => <DrumPad key={index} name={currentArray[index].name} url={currentArray[index].url} keyTrigger={currentArray[index].key} keyCode={currentArray[index].keyCode}/>)
          }
          </DrumPadContainer>
        </DisplayProvider>
      </DrumMachine>
    </AppStyled>
  )
}

export default App