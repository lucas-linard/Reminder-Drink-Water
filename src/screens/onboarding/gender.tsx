import React, {useState} from 'react';
import {View} from 'react-native';
import Button, {CicularButton} from '../../components/Button';
import Container from '../../components/Container';
import Text from '../../components/Text';
import { useNavigation } from '@react-navigation/native';



export default function GenderScreen() {
  const [step, setStep] = useState(1);
  const  navigation  = useNavigation();
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
                  <Button onPress={() => navigation.goBack()} title="voltar" />
                  <Button onPress={() => navigation.navigate('weight', {gender: 'male'})} title="proximo" />
                </View>
            
    </Container>
  );
}
