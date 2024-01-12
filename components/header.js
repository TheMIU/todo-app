import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'orange'
    },
    title: {
        textAlign: "center",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})