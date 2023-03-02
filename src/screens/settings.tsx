import React from 'react';
import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import { SectionList, SectionListData , Dimensions } from 'react-native';


type MenuData = {
    title: string;
    value: string;
    action: () => void;
}

type MenuHeader = {
  id: number;
  title: string;
}

type Section = SectionListData<MenuData,MenuHeader>






const Menu: Section[]  = [
  {
    id: 1,
    title: 'Configurações de lembretes',
    data: [
      {
        title: 'Agenda de lembretes',
        value: '',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Modo de lembrete',
        value: 'Vibrar',
        action: () => {
          console.log('Lembrete de água');
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Usuário',
    data: [
      {
        title: 'Sexo',
        value: 'Masculino',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Peso',
        value: '80 kgs',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Idioma',
        value: 'Padrão',
        action: () => {
          console.log('Lembrete de água');
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Geral',
    data: [
      {
        title: 'Unidade',
        value: 'kg, ml',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Meta de hidratação',
        value: '2200ml',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Idioma',
        value: 'Padrão',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Hora de acordar',
        value: 'Padrão',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Hora de dormir',
        value: 'Padrão',
        action: () => {
          console.log('Lembrete de água');
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Outro',
    data: [
      {
        title: 'Remover anúncios',
        value: '',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Ajuda',
        value: '',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Redefinir dados',
        value: '',
        action: () => {
          console.log('Lembrete de água');
        },
      },
      {
        title: 'Politica de privacidade',
        value: 'Padrão',
        action: () => {
          console.log('Lembrete de água');
        },
      },
    ],
  },
];

const { width, height } = Dimensions.get('window');


export default function App() {
  const renderSectionHeader = (info: {section: Section}) => (
    <Box
      spacingVertical={30}
      flexDirection="column"
      flexWrap="wrap"
      width="100%"
      >
  
      <Text type='secondary' fontWeight="bold" width="100%">
        {info.section.title}
      </Text>
      <Box
        backgroundColor="#808080"
        height={'1px'}
        width="100%"
        spacingVertical={10}
      />
    </Box>
  );

  const renderItem = (info: {item: MenuData}) => {
    return (
     
        <Button
          justifyContent="space-between"
          width={`${width * 0.9}px`}
          flexDirection="row"
          marginTop={10}
          onPress={() => info.item.action()}
          >
          <Text>{info.item.title}</Text>
          <Text type='option'>{info.item.value}</Text>
        </Button>
   
    );
  };

  return (
    <Container
    justifyContent="flex-start"
    alignItems="center"
    marginHorizontal={10}
        >
    <SectionList
      sections={Menu}
      stickySectionHeadersEnabled={false}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}></SectionList>
  </Container>
  );
}
