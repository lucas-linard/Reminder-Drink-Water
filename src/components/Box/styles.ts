import styled from "styled-components/native";

export interface ContainerProps {
    color?: string;
}

export const Container = styled.View<ContainerProps>`  
    justify-content: flex-start;
    align-items: flex-start;
`