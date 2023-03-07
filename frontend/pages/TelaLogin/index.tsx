import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { BackArrow, Botao, BotaoLogin, Container, Digitar, ForgotPassword, ImagemSocial, Logo, Nav, Titulo, TypeBars } from "./style";

export default function TelaLogin() {
    return (
        <>
        <View>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Titulo>Login</Titulo>
                <TypeBars>
                    <Digitar placeholder="E-mail"></Digitar>
                    <Digitar placeholder="Senha"></Digitar>
                </TypeBars>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
                <Nav>
                    <BotaoLogin>
                        <ImagemSocial source={require("../../assets/facebooklogo.png")}/>
                    </BotaoLogin>
                    <BotaoLogin>
                        <ImagemSocial source={require("../../assets/googlelogo.png")}/>
                    </BotaoLogin>
                </Nav>
                <Botao>
                    <Text>ENTRAR</Text>
                </Botao>
            </Container> 
        </View>
        </>
    );
}