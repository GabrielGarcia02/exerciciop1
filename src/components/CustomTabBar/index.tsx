import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons' 
 
export const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if(!isFocused && !event.defaultPrevented) {
                            navigation.navigate({name: route.name, merge: true});
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return(
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTesteID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.buttonTab}
                        >
                            <View style={{ alignItems: 'center', padding: 4 }}>
                                <View style={{...styles.innerButton, backgroundColor: isFocused ? "#8f2abd": "transparent",}}>
                                    <MaterialIcons
                                        name={"compare-arrows"}
                                        size={34}
                                        color={ isFocused ? "#f8e2fd" : "#cfcfcf"}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}
            </View>

        </View>
    )
}