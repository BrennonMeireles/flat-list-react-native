import { View, FlatList, Text } from "react-native";
import frutas from "./frutas";

const ListaFrutas = () => {
    return (
        <FlatList style={{ marginTop: 50}}
            data={frutas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={{ padding: 10, flex: 1, }}>
                    <Text style={{fontSize: 20, color: '#fff'}}>{item.nome}</Text>
                </View>
            )}
        />
    )
}

export default ListaFrutas;