import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccessPage = () => {
    const url = 'http://localhost:8080/register-user-service/user'
    const url2 = 'localhost:8080/register-user-service/api/auth/refreshtoken';

    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    const [user, setUser] = useState('');

    useEffect(() => {
        getToken();
        getRefreshToken();
    }, []);

    const getToken = () => {
        AsyncStorage.getItem('token')
            .then((value) => {
                setToken(value)
                return value;
            })
            .then((tok) => {
                getData(tok)
            })
            .catch(() => {

            });
    }

    const getRefreshToken = () => {
        AsyncStorage.getItem('refreshToken')
            .then((value) => {
                setRefreshToken(value)
            });
    }

    const getData = (tok) => {
        console.log(tok)
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'AuthorizationToken': tok
            }
        })
            .then((response) => response.json())
            .then(data => {
                setUser(data)
                console.log('user set')
            })
            .catch((error) => alert(error))
    }

    const getTokenByRefresh = (refresh) => {
        console.log(refresh)
        fetch(url2, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'AuthorizationToken': refresh
            }
        })
            .then((response) => response.json())
            .then(data => {
                storeToken(data.token)
                storeRefresh(data.refreshToken)
            })
            .catch((error) => alert(error))
    }

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
            <Text>
                token = {token}
            </Text>
            <Text>
                refreshToken = {refreshToken}
            </Text>
            <Text>
                user = {user.password}
            </Text>
        </View>
    );
}

export default AccessPage;