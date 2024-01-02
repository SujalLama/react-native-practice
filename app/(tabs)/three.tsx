import { Text, View } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";

export default function TabThreeScreen() {
    return (
        <View>
            <Text>Tab Three</Text>
            <EditScreenInfo path="app/(tabs)/two.tsx" />
        </View>
    )
}