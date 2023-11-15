import React from 'react';
import { 
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export const CreditCard = () => {
    return (
        <TouchableOpacity style={styles.container}>

             <View>
                <Text style={styles.itemTitle}>Cartão de crédito</Text>
                <Text style={styles.subTitle}>Fatura atual</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimble}>R$</Text>
                    <Text style={styles.balance}>2.596,33</Text>
                </View>
                <Text style={styles.subTitle}>Limite disponível de R$ 47.403,67</Text>
            </View>   
            <View>
                <AntDesign name="right" size={16} style={styles.icon}/>
            </View>

        </TouchableOpacity>
    )
}