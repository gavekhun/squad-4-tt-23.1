import { BackArrow, CartButton, CartButtonText, DescriptionSection, DescriptionText, DescriptionTitle, DetailInfoBar, DetailInfoText, DetailInfoType, DetailsSection, DivBar, FavIcon, PriceSection, ProductImage, ProductName, ProductPrice, RatingBar, RatingSection, RatingSmallSection, RatingStar, RatingText, Screen, SectionBar, SectionImage } from "./style";

export default function ProductScreen() {
    return (
        <Screen>
            <SectionBar>
                <BackArrow source={require("../../assets/BackArrow.svg")}/>
                <FavIcon source={require("../../assets/FavIcon.svg")}/>
            </SectionBar>
            <SectionImage>
                <ProductImage source={require("../../assets/BookImage.png")}/>
            </SectionImage>
            <PriceSection>
                <ProductName>Batman: A Corte das Corujas</ProductName>
                <ProductPrice>R$20,00</ProductPrice>
                <CartButton>
                    <CartButtonText>Adicionar ao Carrinho</CartButtonText>
                </CartButton>
            </PriceSection>
            <DescriptionSection>
                <DivBar></DivBar>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>HQ bem conservada, com capa dura. Comprado há dois anos, primeiro dono.</DescriptionText>
            </DescriptionSection>
            <DetailsSection>
                <DivBar></DivBar>
                <DescriptionTitle>Detalhes</DescriptionTitle>
                <DetailInfoBar>
                    <DetailInfoText>Gênero</DetailInfoText>
                    <DetailInfoType>HQs e Mangás</DetailInfoType>
                </DetailInfoBar>
                <DetailInfoBar>
                    <DetailInfoText>Estado:</DetailInfoText>
                    <DetailInfoType>Usado</DetailInfoType>
                </DetailInfoBar>
            </DetailsSection>
            <RatingSection>
                <DivBar></DivBar>
                <RatingSmallSection>
                    <RatingText>Avaliações(3)</RatingText>
                    <RatingBar>
                        <RatingStar source={require("../../assets/FullStar.svg")}/>
                        <RatingStar source={require("../../assets/FullStar.svg")}/>
                        <RatingStar source={require("../../assets/FullStar.svg")}/>
                        <RatingStar source={require("../../assets/FullStar.svg")}/>
                        <RatingStar source={require("../../assets/HalfStar.png")}/>
                    </RatingBar>
                </RatingSmallSection>
            </RatingSection>
        </Screen>
    );
  }