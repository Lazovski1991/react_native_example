import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getToken} from './Token'

const AccessPage = () => {
    const url = 'http://localhost:8080/register-user-service/user'

    const [user, setUser] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'AuthorizationToken': await getToken()
            }
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                setUser(data)
                console.log('user set')
            })
            .catch((error) => alert(error))
    }

    return (
        <View>
            <Text>
                user = {user.password}
            </Text>
        </View>
    );
}

export default AccessPage;