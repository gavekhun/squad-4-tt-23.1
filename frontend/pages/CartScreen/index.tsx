import { View } from "react-native";
import UserProductCard from "../../components/UserProductCard";
import { BackArrow, TitlePage } from "./style";

export default function CartScreen() {
    return (
        <View>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <TitlePage>Carrinho</TitlePage>
            <UserProductCard></UserProductCard>
        </View>
    );
}
    