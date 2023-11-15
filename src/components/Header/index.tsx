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


export const Header = ({ name }) => {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Image source={require('../../../assets/patati.png')} style={styles.image}/> 
            </TouchableOpacity>
           
            <Text style={styles.username}>Olá, {name}</Text>

        </View>
    </View>
    )
}