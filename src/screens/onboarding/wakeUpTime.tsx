import React, {useState} from 'react';
import {TextInput, TextInputBase, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button, {CicularButton} from '../../components/Button';
import Container from '../../components/Container';

export default function App() {

  const navigation = useNavigation();
  const [text, setText] = useState('');
  const route = useRoute();
  const routeParams = useRoute().params as any;
  
    console.log(route.params)
  return (
    <Container>
            <TextInput
             style={{height: 40}}
             placeholder="Qual horario voce dorme?"
             onChangeText={value => setText(value)}
             defaultValue={text}
             />   
            
            <View style={{flexDirection: 'row'}}>
                  <Button onPress={() => navigation.goBack()} title="voltar" />
                  <Button onPress={() => navigation.navigate('sleepTime',{...routeParams,wakeUpTime:'6:00'})} title="proximo" />
                </View>

    </Container>
  );
}
