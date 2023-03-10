import { View } from "react-native";
import { BackArrow, ButtonText, Container, DescText, EnterButton, Logo, TextView, Title, Type } from "./style";

export default function VerifyCodeScreen(){
    return(
        <View>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Title>Recuperar Senha</Title>
                <TextView>
                    <DescText>Digite o código recebido no email</DescText>
                    <Type></Type>
                </TextView>
                <EnterButton>
                    <ButtonText>Enviar</ButtonText>
                </EnterButton>
            </Container>
        </View>
    );
}