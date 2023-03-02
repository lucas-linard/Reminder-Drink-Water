import styled from 'styled-components/native';

export interface TextProps {
    color?: string;
    fontWeight?: string;
    fontSize?: string;
    width?: string;
    marginRight?: string;
}


export const Text = styled.Text<TextProps>`
    color: ${props => props.color || props.theme.COLORS.TEXT};
    font-weight: ${props => props.fontWeight || 'normal'};
    font-size: ${props => props.fontSize || props.theme.SIZES.FONT}px;
    width: ${props => props.width  || 'auto'};
    margin-right: ${props => props.marginRight || '0'}px;
`