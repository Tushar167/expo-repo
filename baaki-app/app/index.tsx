import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../baakiRedux/baaki-actions";

export default function Index() {
    const dispatch = useDispatch();
    const name = useSelector((state) => state?.common?.name)

    const handlePress = () => {
        dispatch(updateUserAction({ name: "John Doe" }));
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={handlePress}>
                <Text>Press this button</Text>
            </TouchableOpacity>
            {name && <Text style={{ marginTop: 20 }}>Name: {name}</Text>}
        </View>
    );
}
