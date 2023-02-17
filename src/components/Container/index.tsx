import React from "react";
import { Container } from "./styles"

interface ContainerProps {
    children?: React.ReactNode;
}

export default ({children, ...rest}: ContainerProps) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}