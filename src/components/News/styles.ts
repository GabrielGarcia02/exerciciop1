import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        paddingEnd: 14,
        borderBottomWidth: 2,
        borderColor: '#232323',
    },
    newsCard: {
        width: 270,
        height: 90,
        backgroundColor: '#232323',
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 30,
        padding: 16,
        borderRadius: 14,
    },
    newsContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 8,
        paddingRight: 14
    },
    newsText: {
        color: '#cfcfcf',
        fontSize: 15,
        textAlign: 'left',
    }
})
