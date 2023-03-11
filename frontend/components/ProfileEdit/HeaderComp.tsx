import React from "react";
import { ArrowWhite, Header, HeaderTitle } from "./style";


export default function HeaderComp() {
    return (
        <Header>
            <ArrowWhite source={require('../../assets/Voltar Seta branca.png')} />
            <HeaderTitle>Editar Perfil</HeaderTitle>
        </Header>
    )
}