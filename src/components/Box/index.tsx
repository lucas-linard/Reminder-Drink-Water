import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Container , ContainerProps} from "./styles"

interface Props extends ContainerProps {
    children?: ReactNode;
}

export default function Box({ children, ...rest} : Props) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}