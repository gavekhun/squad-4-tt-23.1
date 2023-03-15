import React from "react";
import { Container, Logo, Arrow, Screen, Title, AddPhtView } from "./style";
import AddPht from "../../components/Register/AddPhoto";
import FormComponent from "../../components/Register/Form";




export default function Register() {

    return (
        <Screen>
            <Arrow source={require('../../assets/Voltar Seta.png')} />
            <Logo source={require('../../assets/Logo.jpg')} />
            <Container>
                <AddPhtView>
                    <Title>Cadastre-se</Title>
                    <AddPht />
                </AddPhtView>
                <FormComponent />
            </Container>
        </Screen>

    );
}
