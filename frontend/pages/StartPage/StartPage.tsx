import React from "react";
import { Arrow } from "../Register/style";
import { EnterBtn, Logo, RegLink, Screen} from './style'

export default function StartPage(){
    return(
        <Screen>
            <Arrow source={require('../../assets/Voltar Seta.png')} />
            <Logo source={require('../../assets/Logo.jpg')}/>
            <EnterBtn>ENTRAR</EnterBtn>
            <RegLink>Não possui uma conta? Cadastre-se</RegLink>
        </Screen>
    )
}