import styled from 'styled-components/native';

export interface TextProps {
    color?: string;
    fontWeight?: string;
    fontSize?: string;
    width?: string;
}


export const Text = styled.Text<TextProps>`
    color: ${props => props.color || '#000'};
    font-weight: ${props => props.fontWeight || 'normal'};
    font-size: ${props => props.fontSize || '16'}px;
    width: ${props => props.width || 'auto'};
`