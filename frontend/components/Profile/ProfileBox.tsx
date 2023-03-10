import React from "react";
import { UpperProfile, ProfilePhoto, ProfileFont, ExitBtn, PointsWallet, ProfileBox } from "./style";


export default function ProfileBoxComponent() {
    return (
        <ProfileBox>
            <UpperProfile>
                <ProfilePhoto />
                <ProfileFont style={{ alignSelf: 'center', fontWeight: '500' }}>Olá, <ProfileFont>Marco</ProfileFont></ProfileFont>
            </UpperProfile>
            <PointsWallet style={{ alignSelf: 'flex-start' }}>
                <ProfileFont>Saldo:</ProfileFont>
                <ProfileFont style={{ color: '#5DC0A8' }}>200 Pts</ProfileFont>
                <ExitBtn>Sair</ExitBtn>
            </PointsWallet>
        </ProfileBox>

    )
}