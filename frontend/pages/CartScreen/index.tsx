import { Text, View } from "react-native";
import UserProductCard from "../../components/UserProductCard";
import { BackArrow, BuyButtonText, BuyButtonView, CardsContainer, PriceBar, PriceText, Screen, TitlePage } from "./style";

export default function CartScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <TitlePage>Carrinho</TitlePage>
            <CardsContainer>
                <UserProductCard></UserProductCard>
                <UserProductCard></UserProductCard>
                <PriceBar>
                    <PriceText>Total:</PriceText>
                    <PriceText>R$00,00</PriceText>
                </PriceBar>
                <BuyButtonView>
                    <BuyButtonText>Comprar</BuyButtonText>
                </BuyButtonView>
            </CardsContainer>
        </Screen>
    );
}
    