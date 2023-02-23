import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container , CicularContainer, Title,   } from "./styles";
import { ContainerProps, TextProps } from "./styles";


type Props = TouchableOpacityProps & ContainerProps & {
    title?: string;
    children?: React.ReactNode;
}

export default function Button({ style, title, children , ...rest } : Props) {
    return (
        <Container {...rest}>
             {title? <Title {...rest}>{title}</Title> : null}
            {children}
        </Container>
    )
}

export function CicularButton({ style, title, children , ...rest } : Props) {
    return (
        <CicularContainer {...rest}>
           {title? <Title>{title}</Title> : null}
            {children}
        </CicularContainer>
    )
}
