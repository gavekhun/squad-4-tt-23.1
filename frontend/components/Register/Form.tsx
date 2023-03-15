import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, StyleSheet, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ConfirmOpacity } from "../../pages/Register/style";
import UserServices from "../../services/UserServices/index";
import { Form, Icon } from "./style";


interface registerData {

    email: string;
    cpf: string;
    name: string;
    phoneNumber: string;
    address: string;
    city:string;
    state:string;
    password:string;
    confirmpassword:string;
    cep:string;

}



export default function FormComponent() {

    const { control, handleSubmit, formState: { errors } } = useForm<registerData>();
    const onSubmit = (data: registerData) => {
        console.log(data)
        UserServices.createUser(data).then(() => {
        })
    }

    return (
        <>
            <Form>
                <Icon source={require('../../assets/Icone Mail.png')} />
                <Controller
                    defaultValue={''}
                    name='email'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='E-mail'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.email?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/CPF.png')} />
                <Controller
                    defaultValue={''}
                    name='cpf'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInputMask
                            type={'cpf'}
                            onChangeText={onChange}
                            style={styles.input}
                            value={value}
                            placeholder="CPF"
                            placeholderTextColor='#535353'
                        />
                    )}
                />
                {errors.cpf?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Nome.png')} />
                <Controller
                    defaultValue={''}
                    name='name'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='Nome Completo'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.name?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Telefone.png')} />
                <Controller
                    defaultValue={''}
                    name='phoneNumber'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99)'
                            }}
                            onChangeText={onChange}
                            style={styles.input}
                            value={value}
                            placeholder="Telefone/Celular"
                            placeholderTextColor='#535353'
                        />
                    )}
                />
                {errors.phoneNumber?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Senha.png')} />
                <Controller
                    defaultValue={''}
                    name='password'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='Senha'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.password?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Senha.png')} />
                <Controller
                    defaultValue={''}
                    name='confirmpassword'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='Senha'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.confirmpassword?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Mail.png')} />
                <Controller
                    defaultValue={''}
                    name='cep'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: '99999-999',
                            }}
                            onChangeText={onChange}
                            style={styles.input}
                            value={value}
                            placeholder="CEP"
                            placeholderTextColor='#535353'
                        />
                    )}
                />
                {errors.cep?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Ping.png')} />
                <Controller
                    defaultValue={''}
                    name='city'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='Cidade'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.city?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Ping.png')} />
                <Controller
                    defaultValue={''}
                    name='state'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            style={styles.input}
                            placeholder='Estado'
                            placeholderTextColor='#535353'
                            value={value}
                        />
                    )}
                />
                {errors.state?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <Form>
                <Icon source={require('../../assets/Icone Ping.png')} />
                <Controller
                    defaultValue={''}
                    name='address'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço Completo'
                            placeholderTextColor='#535353'
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.address?.type === 'required' && <Text style={styles.error}>Campo Obrigatório!</Text>}
            </Form>
            <ConfirmOpacity
                onPress={handleSubmit(onSubmit)}
            >
                Confirmar
            </ConfirmOpacity>
        </>

    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: '47px',
        paddingTop: '19px',
        paddingBottom: '19px'
    },
    error: {
        color: 'red',
        marginLeft: '19px',
        alignSelf: 'flex-start'
    }
})