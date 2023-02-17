import React from 'react';
import {View} from 'react-native';
import Button, {CicularButton} from '../components/Button';
import Container from '../components/Container';
import Text from '../components/Text';
export default function App() {
  const btrendo = {
    borderRadius: 50, // metade do maior valor entre height e width
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Container>
      <View>
        <Text style={{fontWeight: 'bold'}}>Seu sexo</Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 300}}>
        <CicularButton
          title="Masculino"
          style={{backgroundColor: '#ADD8E6', margin: 20}}
        />
        <CicularButton
          title="Feminino"
          style={{backgroundColor: '#FFC0CB', margin: 20}}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Button title="voltar" />
        <Button title="proximo" />
      </View>
    </Container>
  );
}
