import React , { useState, useEffect }from "react";
import { SafeAreaView } from "react-native";
import  Text  from "../components/Text";
import  Button from "../components/Button";

import { getRealm } from "../database/realm";

import { hydrationProps } from "../@types/hydrationProps";







export default function Home() {
  const [hydroAmount, setHydroAmount] = useState(0);
  
  
  
  async function hydrate(amount : number) {
    const realm = await getRealm();
    try {
    
      realm.write(() => {
        const create = realm.create('Hydration', {
          amount,
          createdAt: new Date()
        })
      })

    } catch (error) {
      console.log(error)
    }
    

    realm.close()
  }

  async function getHydration() {
    const realm = await getRealm();
    const data = realm.objects<hydrationProps>('Hydration')
    console.log(data)
    // if length === 0, the user didn't drink anything yet 
    data.length == 0? setHydroAmount(10) : setHydroAmount(data[0].amount)
    
    realm.close()
  }

  
  useEffect(() => {
    
    getHydration();
  
  }, [hydrate]);  
  
  return (
    <SafeAreaView >
      <Text>{hydroAmount}</Text>
      <Button title="DRINK" />
      <Button title="Hydration logs" onPress={getHydration}/>
    </SafeAreaView>
  );
}