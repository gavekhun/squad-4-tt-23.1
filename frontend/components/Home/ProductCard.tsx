import React from "react";
import { Card, InfoTable, PdtCondition, PdtImg, PdtImgBox, PdtName, PdtOldPrice, PdtPrice } from './style'
import { productFake } from '../../FakeBack/productFake'
import { View } from "react-native";



export default function PdtCard() {
    const number = (p) => {
        return Math.floor(p.price / 2).toFixed(2)
    }
    return (
        <>{productFake.map((product) => (
            <Card>
                <PdtImgBox>
                    <PdtImg source={product.img} />
                </PdtImgBox>
                <InfoTable>
                    <PdtName>{product.name} - {product.author}</PdtName>
                    <PdtPrice><PdtOldPrice>R${product.price}</PdtOldPrice> {number(product)}</PdtPrice>
                    <PdtCondition>{product.condition}</PdtCondition>
                </InfoTable>
            </Card>
        ))}
        </>
    )
}



type PdtInfo = {
    name: string;
    author: string;
    img: string;
    price: number;
    condition: string;
}