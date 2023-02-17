import styled from 'styled-components/native';

export interface TextProps {
    color?: string;
    fontWeight?: string;
}


export const Text = styled.Text<TextProps>`
    color: ${props => props.color || '#000'};
    font-weight: ${props => props.fontWeight || 'normal'};
    font-size: 20px;
`