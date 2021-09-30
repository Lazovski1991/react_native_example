import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import AccessPage from './AccessPage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = ({navigation}) => {
    const url = 'http://localhost:8080/register-user-service/api/auth/login';

    const auth = (credentions) => {
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    login: credentions.login,
                    password: credentions.password
                })
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                storeToken(data.token)
                storeRefresh(data.refreshToken)
            })
            .catch((error) => alert(error))
    };

    const storeToken = async (value) => {
        try {
            console.log(value)
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            // saving error
        }
    }

    const storeRefresh = async (value) => {
        try {
            console.log(value)
            await AsyncStorage.setItem('refreshToken', value)
        } catch (e) {
            // saving error
        }
    }

    return (
        <View>
            <Formik initialValues={{login: '', password: ''}} onSubmit={(credentions) => {
                console.log("success")
                auth(credentions);
                navigation.navigate('AccessPage');
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.login}
                            placeholder='input login'
                            defaultValue='Lazovski12991@gmail.com'
                            onChangeText={props.handleChange('login')}/>
                        <TextInput
                            style={styles.input}
                            value={props.values.password}
                            placeholder='input password'
                            defaultValue='VZsh81Ts'
                            onChangeText={props.handleChange('password')}/>
                        <Button title='Login' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 3,
        width: 300
    }
});
export default Auth;