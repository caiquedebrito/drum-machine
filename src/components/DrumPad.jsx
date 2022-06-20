import { useContext, useEffect } from "react"
import styled from "styled-components"
import { DisplayContext } from "../context/DisplayContext"

const DrumPadStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 1);
    background: rgba(212, 166, 0, 1);
    cursor: pointer;
`

export const DrumPad = ({ keyTrigger, url, name, keyCode }) => {
    const {setDisplay} = useContext(DisplayContext)

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
    }, [])

    const handleKeyPress = event => {
        if (event.keyCode === keyCode) {
            playSound()
            changeDisplay()
        }
    }

    const handleClick = () => {
        playSound()
        changeDisplay()
    }

    const playSound = () => {
        const audio = document.querySelector(`#${keyTrigger}`)
        audio.currentTime = 0
        audio.play()
    }

    const changeDisplay = () => {
        setDisplay(name)
    }

    return (
        <DrumPadStyled className="drum-pad" id={name.replace(/\s/g, "-")} onClick={handleClick}>
            {keyTrigger}
            <audio src={url} id={keyTrigger} className="clip"></audio>
        </DrumPadStyled>
    )
}