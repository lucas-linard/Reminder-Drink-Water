import React, { ReactNode } from 'react';
import { Text, TextProps } from './styles';

interface Props extends TextProps {
    children?: ReactNode;
    style?: any;
  };


export default function TextComponent({style,  children, ...rest} : Props) {
    return <Text style={style} {...rest}>{children}</Text>;
}