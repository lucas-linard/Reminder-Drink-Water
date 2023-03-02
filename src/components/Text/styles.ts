import styled, {css} from 'styled-components/native';

export interface TextProps {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  width?: string;
  marginRight?: string;
  type?: 'primary' | 'secondary' | 'option';
}

const TextColor = ({type}: TextProps) => {
  switch (type) {
    case 'primary':
      return css`
        ${props => props.theme.COLORS.TEXT};
      `;
    case 'secondary':
      return css`
        ${props => props.theme.COLORS.TEXT_SECONDARY};
      `;

    case 'option':
      return css`
        ${props => props.theme.COLORS.TEXT_OPTION};
      `;

    default:
      return css`
        ${props => props.theme.COLORS.TEXT};
      `;
  }
};

export const Text = styled.Text<TextProps>`
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || props.theme.SIZES.FONT}px;
  width: ${props => props.width || 'auto'};
  margin-right: ${props => props.marginRight || '0'}px;
  color: ${props => TextColor(props)};
`;
