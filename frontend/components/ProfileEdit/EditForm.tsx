import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { EditFormBox, Icon } from "./style";


type UserInfo = {
    holder: string;
    icon: string;
    innerTxt: string;
}

export default function EditForm({ holder, icon, innerTxt }: UserInfo) {
    return (
        <EditFormBox>
            <Icon source={require(`../../assets/${icon}`)} />
            <TextInput
                style={styles.input}
                placeholder={`${holder}`}
                placeholderTextColor='#535353'
                value={innerTxt}
            />
        </EditFormBox>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500',
        marginTop: '11px',
        marginBottom: '10px',
        paddingLeft: '47px',
        paddingTop: '19px',
        paddingBottom: '19px'
    }
})
