import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        borderRadius: 99,
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 :  24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: "rgba(21,21,21,255,0.9)",
        gap: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.80
    },
    buttonTab: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerButton: { 
        padding: 8,
        borderRadius: 99
    },
})