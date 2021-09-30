import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gStyle } from '../styles/style';


export default function FullInfo({route}) {
    return (
        <View style={gStyle.main}>
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Image style={styles.image} source={{uri: route.params.img}}/>
            <Text style={styles.full}>{route.params.full}</Text>
          </View>
        );
    } 



const styles = StyleSheet.create({
    full: {
        fontFamily: 'rob-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    header: {
        fontSize: 25,
        marginTop: 25
    },
    image: {
        width: '100%',
        height: 200,
    }
});