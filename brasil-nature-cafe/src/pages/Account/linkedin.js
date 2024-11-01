import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const supportedURL = 'https://www.linkedin.com/in/isa%C3%ADas-ribeiro-a44635234/';

const OpenURLButton = ({ url, children}) => {
    const handlePress = useCallback( async () => {
        
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("I can't access this url ${url}");
        }
    }, [url]);

    return <Button title={children} onPress={handlePress}></Button>
};

const AppLink = () => {
    return (
        <View style={styles.container}>
            <OpenURLButton url={supportedURL}>
                <AntDesign
                    name="linkedin-square"
                    color="#FFF"
                    size={28}
                />
            </OpenURLButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default AppLink;