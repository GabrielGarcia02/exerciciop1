import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232323',
        width: 350,
        height: 60,
        borderRadius: 14,
        marginLeft: 20,
        alignItems: 'flex-start', 
        marginTop: -18
    },
    cardsContent: {
        flexDirection: 'row',
        paddingTop: 17,
        paddingLeft: 10,
    },
    cardsText: {
        color: '#cfcfcf',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15
    }
})