import React from "react";
import { Container } from "./styles"
import { ViewProps } from "react-native";
interface ContainerProps extends ViewProps {
    children?: React.ReactNode;
}

export default ({children, style,  ...rest}: ContainerProps) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}