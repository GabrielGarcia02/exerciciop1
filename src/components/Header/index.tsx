import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';


export const Header = ({ name }) => {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Image source={require('../../../assets/patati.png')} style={styles.image}/> 
            </TouchableOpacity>
           
            <Text style={styles.username}>Olá, {name}</Text>
        </View>
        <View style={styles.viewIcons}>
            <AntDesign style={styles.icon} name="eyeo" size={24} color='#fff' />
            <AntDesign style={styles.icon} name="questioncircleo" size={24} color='#fff' />
            <AntDesign style={styles.icon} name="mail" size={24} color='#fff' />
        </View>
    </View>
    )
}