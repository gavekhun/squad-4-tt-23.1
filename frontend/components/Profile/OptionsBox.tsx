import React from "react";
import { OptionsBox, OptionText, Option } from "./style";

export default function OptionsBoxComponent() {
    return (
        <OptionsBox>
            <Option>
                <OptionText>Meus Dados</OptionText>
            </Option>
            <Option>
                <OptionText>Endereços</OptionText>
            </Option>
            <Option>
                <OptionText>Privacidade</OptionText>
            </Option>
            <Option>
                <OptionText>Favoritos</OptionText>
            </Option>
            <Option>
                <OptionText>Meus Anúncios</OptionText>
            </Option>
            <Option>
                <OptionText>Meus Pedidos</OptionText>
            </Option>
        </OptionsBox>
    )
}