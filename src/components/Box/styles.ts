import styled from "styled-components/native";

export interface ContainerProps {
    flex?: number;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    spacingVertical?: number;
    spacing?: number;
    backgroundColor?: string;
    height?: string | number;
    width?: string | number;
}

export const Container = styled.View<ContainerProps>`  
    flex: ${props => props.flex || 0};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    margin-top: ${props => props.spacingVertical || 0}px;
    margin-left: ${props => props.spacing || 0}px;
    background-color: ${props => props.backgroundColor || 'transparent'};
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};


`