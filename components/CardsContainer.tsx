import { FlatList } from "react-native";
import { CardsContainerDefaultProps } from "../interfaces/CardProps";
import { ContactCard } from "./Card";
import { View } from "react-native";



const CardsContainer = ({ contactObjects, onDeleteCard }: CardsContainerDefaultProps) => {
    return (
        <View style={{maxHeight: 300, marginTop: 40}}>
            <FlatList
                data={contactObjects}
                renderItem={({ item }) => <ContactCard onDeleted={(id) => {onDeleteCard(id)}} contactObject={item} />}
                keyExtractor={(__, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>)

}

export { CardsContainer as Container }