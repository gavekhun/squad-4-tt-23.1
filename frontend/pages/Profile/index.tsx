import React from "react";
import OptionsBoxComponent from "../../components/Profile/OptionsBox";
import ProfileBoxComponent from "../../components/Profile/ProfileBox";
import { Arrow, Screen } from './style'


export default function Profile() {
    return (
        <Screen>
            <Arrow source={require('../../assets/Voltar Seta.png')} />
            <ProfileBoxComponent/>
            <OptionsBoxComponent/>
        </Screen>
    )
}