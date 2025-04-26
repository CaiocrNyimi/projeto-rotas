import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";

type ProfileScreenNavigationProp = NativeStackNavigationProp< RootStackParamList, "Profile">;

export default function ProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao seu perfil!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "yellow",
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