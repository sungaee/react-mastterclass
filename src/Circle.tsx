import { useState } from "react";
import styled from "styled-components"

interface ContainerProps{
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 20px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`

const x = (a:number, b:number) => a+b

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"} : CircleProps){
    const [value, setValue] = useState(0)
    setValue(2)
    return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
    );
}

export default Circle;