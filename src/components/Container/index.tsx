import React from "react";
import { Container } from "./styles"
import { ViewProps } from "react-native";
interface ContainerProps extends ViewProps {
    children?: React.ReactNode;
    style?: object;
}

export default ({children, style,  ...rest}: ContainerProps) => {
    return (
        <Container style={style} {...rest}>
            {children}
        </Container>
    )
}