import { View, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { styles } from './styles';
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';
import { Cards } from '../../components/Cards';
import { News } from '../../components/News';
import { CreditCard } from '../../components/CreditCard';

const list = [
  {
      id: 1,
      label: 'Boleto conta luz',
      value: '300,90',
      date: '17/09/2022',
      type: 0 // despesas - expenses
  },
  {
      id: 2,
      label: 'Pix Cliente x',
      value: '300,90',
      date: '17/09/2022',
      type: 1 // receita - entradas
  },
  {
      id: 3,
      label: 'Salário',
      value: '7.500,00',
      date: '17/09/2022',
      type: 1 // receita - entradas
  }
]

export default function Home() {
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>

          <Header name="Gabriel Garcia"/>
          
          <Balance saldo='9.250,90' gastos='-527,00'/>
          
          <Actions/>

          <Cards/>

          <News/>

          <CreditCard/>

      </View>
    </ScrollView>  
  );
}

