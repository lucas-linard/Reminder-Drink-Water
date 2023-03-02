import styled from 'styled-components/native';

export interface ContainerProps {  
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  padding?: number;
  borderRadius?: string;
  alignItems?: string;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  backgroundColor?: string;
  justifyContent?: string;
  width?: string;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';

}

export interface TextProps {
  fontSize?: string;
  Fontcolor?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    flex-direction: ${props => props.flexDirection || 'column'};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    padding: ${props => props.padding || '7'}px;
    border-radius: ${props => props.borderRadius || '0'}px;
    align-items: ${props => props.alignItems || 'center'};
    margin-top: ${props => props.marginTop || '5'}px;
    margin-left: ${props => props.marginLeft || '5'}px;
    margin-right: ${props => props.marginRight || '5'}px;
    background-color: ${props => props.backgroundColor || props.theme.COLORS.BACKGROUND};
    justify-content: ${props => props.justifyContent || 'center'};
    width: ${props => props.width || 'auto'};
    
    `

//dont mess withg this for now
export const CicularContainer = styled.TouchableOpacity`
    border-radius: 50px;
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    `



export const Title = styled.Text<TextProps>`
  font-size: ${props => props.fontSize || props.theme.SIZES.FONT}px;
  color:  ${props => props.Fontcolor || props.theme.COLORS.TEXT};
`;