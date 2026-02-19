import { View, Text, FlatList, StyleSheet } from "react-native";
import LojaCard from "../components/LojaCard";
import { LOJAS } from "../data/mockData";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Lojas próximas</Text>
            <FlatList
                data={LOJAS}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <LojaCard loja={item} />}
                contentContainerStyle={styles.list}
                />
        </View>
    ); }