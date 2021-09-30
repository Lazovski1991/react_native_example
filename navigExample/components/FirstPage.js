import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const FirstPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
            title='second'
            onPress={() => navigation.navigate('SecondPage')}
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

export default FirstPage;
