import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity, 
    ScrollView
} from 'react-native';
import { styles } from './styles';

export const News = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.newsCard}>
                <View style={styles.newsContent}>
                    <Text style={styles.newsText}>O Modo Escuro já está disponível no app! Saiba mais.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.newsCard}>
                <View style={styles.newsContent}>
                    <Text style={styles.newsText}>Convide amigos para o ****** e desbloqueie brasões incríves.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.newsCard}>
                <View style={styles.newsContent}>
                    <Text style={styles.newsText}>Facilite seus planos futuros: guarde dinheiro nas Caixinhas</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>    
    )
}