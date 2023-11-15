import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: 20,
        marginEnd: 10,
        borderRadius: 4,
        paddingTop: 6,
        paddingBottom: 22,
    },
    icon: {
        color: '#cfcfcf',
        paddingTop: 5,
        paddingLeft: 5
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#cfcfcf',
        paddingBottom: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySimble: {
        color: '#cfcfcf',
        marginRight: 6,
        fontSize: 20
    },
    balance: {
        fontSize: 20,
        color: '#cfcfcf'
    },
});