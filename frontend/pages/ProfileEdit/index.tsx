import React from "react";
import ChangePhoto from "../../components/ProfileEdit/ChangePhoto";
import EditForm from "../../components/ProfileEdit/EditForm";
import HeaderComp from "../../components/ProfileEdit/HeaderComp";
import { ConfirmBtn, ContainerForm, EditPasswordTxt, Screen, Teste } from './style'

export default function ProfileEdit() {
    return (
        <Screen>
            <HeaderComp/>
            <ChangePhoto/>
            <ContainerForm>
                <Teste>
                    <EditForm holder={"Nome"} icon={"Icone Nome.png"} innerTxt={'Marco Eduardo Rodrigues da Silva'} />
                    <EditForm holder={"E-mail"} icon={"Icone Email.png"} innerTxt={"Marco@gmail.com"} />
                    <EditForm holder={"CPF"} icon={"CPF.png"} innerTxt={"999.999.999-99"} />
                    <EditForm holder={"Telefone"} icon={"Icone Telefone.png"} innerTxt={"(21) 4002-5060"} />
                    <EditForm holder={"Senha"} icon={"Icone Senha.png"} innerTxt={"*********"} />
                    <EditPasswordTxt>Editar Senha</EditPasswordTxt>
                </Teste>
            </ContainerForm>
            <ConfirmBtn>Salvar Alterações</ConfirmBtn>
        </Screen>
    )
}