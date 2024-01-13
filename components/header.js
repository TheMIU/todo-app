import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Icon name="list" size={30} color='white' />
                <Text style={styles.title}>My ToDos  </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'orange',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        textAlignVertical: "center",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    }
})