import { NavigationContainer } from '@react-navigation/native'
import { Routes} from './src/routes/tab.routes'

const App =() => {
    return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>  
    )
};

export default App;
