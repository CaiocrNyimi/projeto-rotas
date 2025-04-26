import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp< RootStackParamList, "Home">;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.buttonText}>Ir para Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
                <Text style={styles.buttonText}>Ir para Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "green",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 15,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        textAlign: "center",
    },
});