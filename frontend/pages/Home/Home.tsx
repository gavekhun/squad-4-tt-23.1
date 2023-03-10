import React from "react";
import { ScrollView, Text } from "react-native";
import HomeProducts from "../../components/Home/HomeProducts";
import ReleaseScroll from "../../components/Home/ReleaseScroll";
import SearchBar from "../../components/Home/Search";
import { Screen, Title, Section} from './style'

export default function Home() {
    return (
        <Screen>
            <SearchBar />
            <Title>
                Lançamentos
            </Title>
            <ReleaseScroll />

            <Section>Promoções</Section>
            <HomeProducts/>
            <Section>HQs</Section>
            <HomeProducts/>
            <Section>Educacional</Section>
            <HomeProducts/>

        </Screen>
    )
}