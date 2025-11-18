import { CardDefaultPropsContact } from "../interfaces/CardProps";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";



const Card = ({ contactObject, onDeleted }: CardDefaultPropsContact) => {
    return (
        <View style={styles.card}>
            <Text style={styles.id}>{contactObject.id}</Text>
            <Text style={styles.name}>{contactObject.name}</Text>
            <Text style={styles.number}>{contactObject.number}</Text>

            <Text style={styles.x} onPress={() => onDeleted(contactObject.id)}>
                <Ionicons name="trash" size={20} />
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: 300,

        marginHorizontal: 16,
    },

    x: {
        marginTop: 7,
        width: 20,
        height: 20,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 2
    },

    id: {
        fontSize: 12,
        marginBottom: 5,
        color: "#aaa"
    },

    name: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
        color: "#333",
    },
    number: {
        fontSize: 14,
        color: "#666",
    },
});

export { Card as ContactCard };