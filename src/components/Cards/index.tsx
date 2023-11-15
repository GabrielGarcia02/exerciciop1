import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity, 
    ScrollView
} from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Cards = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cardsContent}> 
                <MaterialCommunityIcons name="credit-card-chip-outline" size={24} color="#cfcfcf" />
                <Text style={styles.cardsText}>Meus cartões</Text>              
            </View>
        </TouchableOpacity>
    )
}