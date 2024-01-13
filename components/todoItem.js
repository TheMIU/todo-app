import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Icon name="delete" size={18} color="gray" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row'
    },
    text: {
        marginLeft:10,
    }
})