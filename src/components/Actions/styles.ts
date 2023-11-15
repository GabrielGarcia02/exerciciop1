import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        maxHeight: 150,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 20,
    },
    areaButton: {
        backgroundColor: '#232323',
        height: 70,
        width: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#cfcfcf',
        textAlignVertical: 'top',
    },
    buttonText: {
        width: 80,
        height: 80
    }
})