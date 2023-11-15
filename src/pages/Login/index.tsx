import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    return(
        <View style={styles.container}>
            
            <View style={styles.form}>
                <Text style={styles.title}>Faça seu login</Text>

                <TextInput style={styles.input} 
                    placeholder='Email'
                    placeholderTextColor='#555'/>

                <TextInput style={styles.input} 
                    placeholder='Senha'
                    placeholderTextColor='#555'/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CONTINUAR</Text>
                </TouchableOpacity>

                <View style={styles.viewTextBottom}>
                    <Text style={styles.textBottom}>Esqueci minha senha</Text>
                    <AntDesign name="right" size={10} color="#6d0ad6" style={styles.icon}/>
                </View>

                <View style={styles.viewTextBottom}>
                    <Text style={styles.textBottom}>Ainda não sou cliente</Text>
                    <AntDesign name="right" size={10} color="#6d0ad6" style={styles.icon}/>
                </View>
            </View>

        </View>
    )
}