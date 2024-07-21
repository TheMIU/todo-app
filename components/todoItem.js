import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TodoItem({ item, pressHandler }) {
    const handlePress = () => {
        Alert.alert(
            "Delete Todo",
            "Are you sure you want to delete this todo?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => pressHandler(item.key),
                    style: "destructive"
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.item}>
                <Icon name="delete" size={18} color="gray" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
        marginLeft: 10,
    }
});
