import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import AccessPage from './AccessPage';
import {storeToken} from "./Token";

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
                if (response.status === 200) {
                    return response.json();
                } else {
                    return response.json()
                }
            })
            .then(data => {
                if (data.token !== undefined) {
                    storeToken("token", data.token);
                    storeToken("refreshToken", data.refreshToken);
                } else {
                    alert(data.message)
                }
            })
            .catch((error) => {
                alert(error)
            })
    };


    return (
        <View>
            <Formik initialValues={{login: '', password: ''}} onSubmit={(credentions) => {
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