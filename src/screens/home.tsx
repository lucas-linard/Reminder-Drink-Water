import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Text from '../components/Text';
import uuid from 'react-native-uuid';
import {getRealm} from '../database/realm';

import {hydrationProps} from '../@types/hydrationProps';

export default function Home() {
  const [hydroAmount, setHydroAmount] = useState(0);

  async function hydrate(amount: number) {
    const realm = await getRealm();
    try {
      realm.write(() => {
        const create = realm.create('Hydration', {
          _id: uuid.v4(),
          amount,
          created_At: new Date(),
        });
      });
      setHydroAmount(hydroAmount + amount);
    } catch (error) {
      console.log(error);
    } finally {
      realm.close();
    }

  }

  async function getHydration() {
    const realm = await getRealm();
    const data = realm.objects<hydrationProps>('Hydration');
    
    const today = new Date();
    const todayData = data.filter(item => {
      return (
        item.created_At.getDate() === today.getDate() &&
        item.created_At.getMonth() === today.getMonth() &&
        item.created_At.getFullYear() === today.getFullYear()
      );
    });

    const amountOfToday = todayData.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);

    amountOfToday === 0 ? setHydroAmount(0) : setHydroAmount(amountOfToday);
    console.log('rendered')
    realm.close();
  }

  useEffect(() => {
    getHydration();
  }, [hydrate]);

  return (
    <SafeAreaView>
      <Text>{hydroAmount}</Text>
      <Button title="DRINK" onPress={() => hydrate(200)} />
      <Button title="Hydration logs" onPress={getHydration} />
    </SafeAreaView>
  );
}
