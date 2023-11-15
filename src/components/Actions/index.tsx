import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity, 
    ScrollView
} from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const Actions = () => {
    
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='qrcode' size={26} color='#cfcfcf'/>
                </View>
                <Text style={styles.labelButton}>Área Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='barcode' size={26} color='#cfcfcf'/>
                </View>
                <Text style={styles.labelButton}>Pagar</Text>         
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="bank-transfer" size={24} color='#cfcfcf'/>
                </View>
                <Text style={styles.labelButton}>Trasnferir</Text>         
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Feather name="smartphone" size={24} color='#cfcfcf'/>
                </View>
                <View style={styles.buttonText}>
                    <Text style={styles.labelButton}>Recarga de celular</Text>        
                </View> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="piggy-bank" size={24} color='#cfcfcf'/>
                </View>
                <Text style={styles.labelButton}>Caixinhas</Text>         
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='info' size={26} color='#cfcfcf'/>
                </View>
                <Text style={styles.labelButton}>Ajuda</Text>         
            </TouchableOpacity>

        </ScrollView>
    )
}