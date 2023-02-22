import React, { ReactNode } from 'react';
import { TextStyle } from 'react-native';
import { Text, TextProps } from './styles';

interface Props extends TextProps {
    children?: ReactNode;
    style?: TextStyle;
  };


export default function TextComponent({style,  children, ...rest} : Props) {
    return <Text style={style} {...rest}>{children}</Text>;
}