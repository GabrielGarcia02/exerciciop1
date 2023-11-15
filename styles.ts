import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	 title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
	input: {
        backgroundColor:'#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
});