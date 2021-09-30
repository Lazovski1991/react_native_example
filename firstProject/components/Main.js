import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';


export default function Main({ navigation }) {
    const [news, setNews] = useState([
        {name: 'new1', anons: 'anons1', full: 'full text1', key: '1', img: 'https://content.onliner.by/motofleamarket/1040294/800x800/dda269d6249c8a96d43a463c1556f296.jpeg'},
        {name: 'new2', anons: 'anons2', full: 'full text2', key: '2', img: 'https://content.onliner.by/motofleamarket/1040294/800x800/305bdb838d66dbca7a2a138a701004d0.jpeg'},
        {name: 'new3', anons: 'anons3', full: 'full text3', key: '3', img: 'https://content.onliner.by/motofleamarket/1040294/800x800/c6bc526bb32b8e641392f0a8e7e76b0c.jpeg'},
    ])

    const[modalVisible, setVisible] = useState(false)

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString
            return [
                article,
                ...list
            ]
        })
            setVisible(false)
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={modalVisible}>
            <View style={gStyle}>
                <Ionicons name="close" size={24} color="red" style={styles.closeIcon} onPress= {() =>setVisible(false)}/>
                <Text style={styles.title}>Form add</Text>
                <Form addArticle={addArticle}/>
            </View>
            </Modal>
            <Ionicons style={styles.addIcon} name="add" size={24} color="red" onPress= {() =>setVisible(true)}/>
            <Text style={[gStyle.title, styles.header]}>Main page!</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{uri: item.img}}/>
                    <Text style={styles.title}>{ item.name }</Text>
                    <Text style={styles.anons}>{ item.anons }</Text>
                </TouchableOpacity>    
        )}/>
          </View>
        );
    } 



const styles = StyleSheet.create({
    header:{
        marginBottom: 30
    },
    item:{
        width: '50%',
        marginBottom: 30
    },
    title: {
        fontFamily: 'rob-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons:{
        fontFamily: 'rob-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    image: {
        width: '50%',
        height: 200,
    },
    addIcon:{
        textAlign: 'center',
        marginBottom: 15
    },
    closeIcon: {
        textAlign: 'center'
    }
});