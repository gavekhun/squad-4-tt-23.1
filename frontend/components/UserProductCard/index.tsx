import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Card, CardImage, CardText, CardTextView, IconImage, IconsContainer } from "./style";
const FavoriteStatusEmpty = require("../../assets/FavoriteIconEmpty.svg")
const FavoriteStatusFull = require("../../assets/FavoriteIconFull.svg")

interface UserProductCardInfo {
    ProductName?: string
    ProductImage?: string
    ProductUse?: string
    ProductPrice?: number
    OnChange?: () => {}
    Favorite?: boolean
}

export default function UserProductCard({ProductImage, OnChange, Favorite}: UserProductCardInfo) {
    const [favoriteButton, setFavoriteButton] = useState()
    return(
        <View>
            <Card>
                <CardImage></CardImage>
                <CardTextView>
                    <CardText>NOME DO LIVRO</CardText>
                    <CardText>ESTADO</CardText>
                    <CardText>R$00,00</CardText>
                </CardTextView>
                <IconsContainer onPress={OnChange}>
                    {/* {?
                    (<IconImage source={FavoriteStatusEmpty}/>): */}
                    <IconImage source={FavoriteStatusFull}/>
                    <IconImage source={require("../../assets/TrashIcon.svg")}/>
                </IconsContainer>
            </Card>
        </View>
    );
}