import { 
    StyleSheet,
    Platform
} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#6d0ad6',  
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        height: 400,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 25
    },
    input: {
        color: '#404040',
        fontSize: 18,
        marginTop: 40,
        padding: 10,
        borderColor: '#a0a0a0',
        borderBottomWidth: 1,
        marginBottom: 1,
        width: 240,
    },
    button: {
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        marginBottom: 15,
        borderWidth: 1.4,
        borderColor: '#6d0ad6',
        borderRadius: 3
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
    },
    viewTextBottom: {
        flexDirection: 'row',
        paddingTop: 10
    },
    textBottom: {
        color: '#6d0ad6'
    },
    icon: {
        paddingTop: 5
    }

})