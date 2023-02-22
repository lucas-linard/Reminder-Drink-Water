import React from "react";
import Container  from "../components/Container";
import Box from "../components/Box";
import Text from "../components/Text";
import Button from "../components/Button";
import { ScrollView } from "react-native";

export default function App() {
    return( 
        <ScrollView>
        <Container style={{marginHorizontal: 10, alignItems: 'flex-start' }}>
        {/* CONFIG LEMBRETE */}
        <Box style={{marginTop:10,flexDirection: 'row',flexWrap: 'wrap'}}>
            <Text style={{color:'#808080', fontWeight:'bold', width:"100%"}}>Configurações de lembretes</Text>
            <Box style={{backgroundColor:"#808080" , height:1, width:"40%", marginHorizontal: 10, marginTop:10}}/>
        </Box>

        <Button style={{justifyContent:'flex-start', marginVertical: 10}}>
            <Text>Agenda de lembretes</Text>
        </Button>
        
        <Button style={{justifyContent:'flex-start', marginVertical: 10}}>
            <Text>Modo do lembrete</Text>
        </Button>
        {/* GERAL */}
        <Box style={{marginTop:10,flexDirection: 'row',flexWrap: 'wrap'}}>
            <Text style={{color:'#808080', fontWeight:'bold', width:"100%"}}>Geral</Text>
            <Box style={{backgroundColor:"#808080" , height:1, width:"40%", marginHorizontal: 10, marginTop:10}}/>
        </Box>
        
        <Button style={{justifyContent:'flex-start', marginVertical: 10}}>
            <Text>Remover anúncios</Text>
        </Button>
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Unidade</Text>
            <Text style={{color:'#95b1e3'}}>kg, ml</Text>
        </Button>

        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text >Meta de consumo</Text>
            <Text style={{color:'#95b1e3'}}>2200 ml</Text>
        </Button>
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>idioma</Text>
            <Text style={{color:'#95b1e3'}}>Padrão</Text>
        </Button>
        
        {/* USUARIO */}
        <Box style={{marginTop:10,flexDirection: 'row',flexWrap: 'wrap'}}>
            <Text style={{color:'#808080', fontWeight:'bold', width:"100%"}}>Dados Pessoais</Text>
            <Box style={{backgroundColor:"#808080" , height:1, width:"40%", marginHorizontal: 10, marginTop:10}}/>
        </Box>
        
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Sexo</Text>
            <Text style={{color:'#95b1e3'}}>Masculino</Text>
        </Button>

        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text >Peso</Text>
            <Text style={{color:'#95b1e3'}}>83 kg</Text>
        </Button>
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Hora de acordar</Text>
            <Text style={{color:'#95b1e3'}}> 6:00</Text>
        </Button>
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>idioma</Text>
            <Text style={{color:'#95b1e3'}}>22:00</Text>
        </Button>
        
        {/* Outro */}
        <Box style={{marginTop:10,flexDirection: 'row',flexWrap: 'wrap'}}>
            <Text style={{color:'#808080', fontWeight:'bold', width:"100%"}}>Outro</Text>
            <Box style={{backgroundColor:"#808080" , height:1, width:"40%", marginHorizontal: 10, marginTop:10}}/>
        </Box>
        
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Sexo</Text>
        </Button>

        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text >Redefinir Dados</Text>
            <Text style={{color:'#95b1e3'}}>83 kg</Text>
        </Button>

        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Fale conosco</Text>
        </Button>
        <Button style={{flexDirection:'row',justifyContent:'space-between',width:'100%', marginVertical: 10 }}>
            <Text>Políticas de privacidade</Text>
        </Button>
        
        </Container>
        </ScrollView>
    )
}