import styled from "styled-components/native";

interface ContainerProps {
    flex?: number;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    flex:${props => props.flex || 1};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    background-color: ${props => props.backgroundColor || 'transparent'};
`