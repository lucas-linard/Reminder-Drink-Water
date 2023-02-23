import styled from 'styled-components/native';

export interface ContainerProps {  
  padding?: string;
  borderRadius?: string;
  alignItems?: string;
  marginTop?: string;
  backgroundColor?: string;
}

export interface TextProps {
  fontSize?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    padding: ${props => props.padding || '7px'};
    border-radius: ${props => props.borderRadius || '0px'};
    align-items: ${props => props.alignItems || 'center'};
    margin-top: ${props => props.marginTop || '5px'};
    background-color: ${props => props.backgroundColor || '#fff'};
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
  font-size: ${props => props.fontSize || '16px'};
`;