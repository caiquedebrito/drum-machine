import { useContext } from "react";
import styled from "styled-components";
import { DisplayContext } from "../context/DisplayContext";

const DisplayStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 55px;
    background: rgba(192, 192, 192, 1);
    margin: 0 auto;
    padding: 6px 0;
`

export const Display = () => {
    const {display} = useContext(DisplayContext)

    return (
        <DisplayStyled id="display">
            {display}
        </DisplayStyled>
    )
}