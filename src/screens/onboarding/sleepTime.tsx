import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { useNavigation, useRoute, StackActions } from '@react-navigation/native';
import { getRealm } from '../../database/realm';
import uuid from 'react-native-uuid';
export default function App() {

  const navigation = useNavigation();
  const [text, setText] = useState('');
  const route = useRoute();
  const routeParams = useRoute().params as any;
 
 
  async function saveUser() {
    //const realm = await getRealm();

    try {
      // realm.write(() => {
      //   realm.create('User', {
      //     _id: uuid.v4(),
      //     gender: routeParams.gender,
      //     weight: routeParams.weight,
      //     unit: routeParams.unit,
      //     wakeUpTime: routeParams.wakeUpTime,
      //     sleepTime: text,
      //   })
      // })
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'tab' }],
      });
    } catch (error) {
      console.error(error)
    } finally {
      //realm.close()
    }
  }
   
  return (
    <Container>
            <TextInput
             style={{height: 40}}
             placeholder="Type here to translate!"
             onChangeText={value => setText(value)}
             defaultValue={text}
             />   
            
            <View style={{flexDirection: 'row'}}>
                  <Button onPress={() => navigation.goBack()} title="voltar" />
                  <Button onPress={() => saveUser()} title="proximo" />
                </View>

    </Container>
  );
}
