import React from "react";
import { Container, ContainerProps } from "./styles"
import { ViewProps } from "react-native";
type ContainerProp = ViewProps & ContainerProps & {
    children?: React.ReactNode;
}

export default ({children, style,  ...rest}: ContainerProp) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}