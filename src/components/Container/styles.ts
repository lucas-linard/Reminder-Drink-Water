import styled from "styled-components/native";

interface ContainerProps {
    color?: string;
    spacing?: number;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`