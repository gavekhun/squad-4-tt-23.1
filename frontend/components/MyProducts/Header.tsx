import React from "react";
import { Arrow, Header, HeaderTitle } from "./style";

export default function HeaderComponent() {
    return (
        <Header>
            <Arrow source={require('../../assets/Voltar Seta.png')}/>
            <HeaderTitle>Meus Anúncios</HeaderTitle>
        </Header>

    )
}