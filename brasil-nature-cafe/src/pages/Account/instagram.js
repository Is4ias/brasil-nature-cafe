import React, {useCallback, useDebugValue} from "react";
import { Alert, Burron, Linking, View, StyleSheet, Button } from "react-native";
import { Entypo} from '@expo/vector-icons';


const supportedURL = "https://www.instagram.com/ias_rib02/profilecard/?igsh=MWU3YXBhNTcxbGNiOQ==";

const OpenURLButton3 = ({ url, children}) => {
    const handlePress = useCallback( async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("I can't access this url ${url}")
        }
    }, [url]);

    return <Button title={children} onPress={handlePress}></Button>
};

const AppLink3 = () => {
    return (
        <View style={styles.container}>
            <OpenURLButton3 url={supportedURL}> 
                <Entypo
                    name="instagram"
                    color="#FFF"
                    size={28}
                /> 
            </OpenURLButton3>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default AppLink3;