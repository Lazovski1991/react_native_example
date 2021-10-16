import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

const refreshUrl = "http://localhost:8080/register-user-service/api/auth/refreshtoken";

export const getToken = async () => {
    let token = await AsyncStorage.getItem('token')
    if (isTokenExpired(token)) {
        return await AsyncStorage.getItem('refreshToken')
            .then((refreshToken) => {
                return refresh(refreshToken)
                    .then(async () => {
                        return await AsyncStorage.getItem('token')
                    })
            });
    } else {
        return token
    }
}

const isTokenExpired = (token) => jwt_decode(token).exp < Date.now() / 1000

export const storeToken = async (item, value) => {
    try {
        console.log(value)
        await AsyncStorage.setItem(item, value)
    } catch (e) {
        alert("Token indefined")
    }
}

const refresh = async (refreshToken) => {
    await fetch(refreshUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'AuthorizationToken': refreshToken
        }
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
                AsyncStorage.clear()
                    .then(() => storeToken("token", data.token))
                    .then(() => storeToken("refreshToken", data.refreshToken))
            } else {
                alert(data.message)
            }
        })
        .catch((error) => {
            alert(error)
        })
}