import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { CustomTabBar } from "../components/CustomTabBar";
import { Ionicons } from 'react-native-vector-icons';



const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: {};
    Login: {};
}
 export function Routes(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',
               
                tabBarStyle:{
                    borderTopWidth: 0,
                    backgroundColor: "#FFF"
                }
            }}
            
            tabBar={ (props) => <CustomTabBar {...props} /> }    
        >
            <Tab.Screen 
                name="Login" 
                component={Login} 
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'compare-arrows' : 'compare-arrows'} size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'attach-money' : 'attach-money'} size={size} color={color} />
                    ),
                }} 
            />
        </Tab.Navigator>
    )
 }