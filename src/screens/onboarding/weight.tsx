import React, {useState} from 'react';
import { View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button, {CicularButton} from '../../components/Button';
import Container from '../../components/Container';
import Text from '../../components/Text';

export default function App() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  
  const Routeparams = useRoute().params as any;
  
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
                  <Button onPress={() => navigation.navigate('wakeUpTime', {...Routeparams, weight:80, unit: 'kg'})} title="proximo" />
                </View>
            
    </Container>
  );
}
