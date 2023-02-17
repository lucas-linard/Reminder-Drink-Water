import React, { ReactNode } from 'react';
import { Text } from './styles';

type Props = {
    children?: ReactNode;
  };


export default function TextComponent({ children} : Props) {
    return <Text>{children}</Text>;   
}