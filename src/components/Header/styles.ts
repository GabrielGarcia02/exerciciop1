import { Platform, StyleSheet, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6d0ad6',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 40,
    },
    content: {
        flex: 1,
        alignItems: 'flex-start', 
        flexDirection: 'column',
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        paddingLeft: 1,
        marginBottom: 30
    },
    viewIcons: {
        flexDirection: 'row',
        marginTop: -8,
        paddingRight: 12
    },
    icon: {
        paddingLeft: 20,
        
    }
})