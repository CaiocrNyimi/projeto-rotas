import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Details">;

export default function DetailsScreen() {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Esta é a tela de detalhes.</Text>
            <TouchableOpacity style={styles.animatedButton} onPress={() => {navigation.popToTop()}}>
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
        backgroundColor: "lightblue",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        marginBottom: 30,
    },
    animatedButton: {
        backgroundColor: "blue",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 15,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },
  });