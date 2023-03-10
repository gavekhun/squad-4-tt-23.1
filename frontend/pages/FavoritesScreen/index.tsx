import UserProductCard from "../../components/UserProductCard";
import { BackArrow, CardsContainer, Screen, TitlePage } from "./style";

export default function FavoritesScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <TitlePage>Meus Favoritos</TitlePage>
            <CardsContainer>
                <UserProductCard></UserProductCard>
                <UserProductCard></UserProductCard>
            </CardsContainer>
        </Screen>
    );
}
    