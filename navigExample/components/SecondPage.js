import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const SecondPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title='first'
                onPress={() => navigation.navigate('FirstPage')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondPage;
