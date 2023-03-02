import React, { ReactNode } from 'react';
import { TextStyle } from 'react-native';
import { Text, TextProps } from './styles';

interface Props extends TextProps {
    children?: ReactNode;
  };


export default function TextComponent({children, ...rest} : Props) {
    return <Text {...rest}>{children}</Text>;
}