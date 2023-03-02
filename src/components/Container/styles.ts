import styled from "styled-components/native";
export interface ContainerProps {
    flex?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    backgroundColor?: string;
    marginHorizontal?: number;
    padding?: number;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    flex:${props => props.flex || 1};
    padding: ${props => props.theme.SIZES.BASE || props.padding}px;
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    background-color: ${props => props.backgroundColor || props.theme.COLORS.BACKGROUND};
    margin: 0px ${props => props.marginHorizontal || '0'}px 0px ${props => props.marginHorizontal || '0'}px;
`