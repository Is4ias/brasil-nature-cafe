import React, { useCallback} from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const supportedURL = "https://github.com/Is4ias";

const OpenURLButton2 = ({ url, children}) => {
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

const AppLink2 = () => {
    return (
        <View style={styles.container}>
            <OpenURLButton2 url={supportedURL}>
                <FontAwesome
                    name="github-square"
                    size={28}
                    color="#4B3832"
                />
            </OpenURLButton2>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default AppLink2;