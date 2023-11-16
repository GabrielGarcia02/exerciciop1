import { View, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { styles } from './styles';
import { Actions } from '../../components/Actions';
import { Cards } from '../../components/Cards';
import { News } from '../../components/News';
import { CreditCard } from '../../components/CreditCard';

export default function Home() {
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>

          <Header name="Gabriel Garcia"/>
          
          <Balance saldo='9.250,90'/>
          
          <Actions/>

          <Cards/>

          <News/>

          <CreditCard/>

      </View>
    </ScrollView>  
  );
}

