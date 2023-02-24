import styled from 'styled-components/native';

export interface ContainerProps {  
  padding?: number;
  borderRadius?: string;
  alignItems?: string;
  marginTop?: string | number;
  marginLeft?: string | number;
  backgroundColor?: string;
  justifyContent?: string;

}

export interface TextProps {
  fontSize?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    padding: ${props => props.padding || '7'}px;
    border-radius: ${props => props.borderRadius || '0'}px;
    align-items: ${props => props.alignItems || 'center'};
    margin-top: ${props => props.marginTop || '5'}px;
    margin-left: ${props => props.marginLeft || '5'}px;
    background-color: ${props => props.backgroundColor || '#fff'};
    justify-content: ${props => props.justifyContent || 'center'};
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
  font-size: ${props => props.fontSize || '16px'}px;
`;