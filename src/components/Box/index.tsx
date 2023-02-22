import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Container , ContainerProps} from "./styles"

interface Props extends ContainerProps {
    children?: ReactNode;
    style?: ViewStyle;
}

export default function Box({style,  children, ...rest} : Props) {
    return (
        <Container style={style} {...rest}>
            {children}
        </Container>
    )
}