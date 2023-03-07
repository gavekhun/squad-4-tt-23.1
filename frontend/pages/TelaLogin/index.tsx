import { View } from "react-native";
import { BackArrow, ButtonText, Container, EnterButton, ForgotPassword,InputBar, InputBarImage, LoginButton, Logo, Nav, SocialImage, Title, Type, TypeBars } from "./style";

export default function TelaLogin() {
    return (
        <>
        <View>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Title>Login</Title>
                <TypeBars>
                    <InputBar>
                        <InputBarImage source={require("../../assets/EmailIcon.svg")}/>
                        <Type placeholder="E-mail"></Type>
                    </InputBar>
                    <InputBar>
                        <InputBarImage source={require("../../assets/PasswordIcon.svg")}/>
                        <Type placeholder="Senha"></Type>
                    </InputBar>
                </TypeBars>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
                <Nav>
                    <LoginButton>
                        <SocialImage source={require("../../assets/facebooklogo.png")}/>
                    </LoginButton>
                    <LoginButton>
                        <SocialImage source={require("../../assets/googlelogo.png")}/>
                    </LoginButton>
                </Nav>
                <EnterButton>
                    <ButtonText>ENTRAR</ButtonText>
                </EnterButton>
            </Container> 
        </View>
        </>
    );
}
