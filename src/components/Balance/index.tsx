import React from "react";
import { 
    View,
    Text
 } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export const Balance = ({ saldo }) => {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Conta</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimble}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>   
            <View>
                <AntDesign name="right" size={16} style={styles.icon}/>
            </View>
        </View>
        
        
    );
}