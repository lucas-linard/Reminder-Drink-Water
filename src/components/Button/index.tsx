import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container , CicularContainer, Title } from "./styles";


type Props = TouchableOpacityProps & {
    title?: string;
    children?: React.ReactNode;
    style?: object;
}

export default function Button({ style, title, children , ...rest } : Props) {
    return (
        <Container style={style} {...rest}>
             {title? <Title>{title}</Title> : null}
            {children}
        </Container>
    )
}

export function CicularButton({ style, title, children , ...rest } : Props) {
    return (
        <CicularContainer style={style} {...rest}>
           {title? <Title>{title}</Title> : null}
            {children}
        </CicularContainer>
    )
}
