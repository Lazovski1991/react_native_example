import React from 'react';
import {View, Image, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.6;

const images = [
    'https://content.onliner.by/news/1400x5616/35eabbb65839ded4c77e320f697e7bc5.jpeg',
    'https://content.onliner.by/news/1100x5616/9a9d0de528a3ecefbb23d41d5fca085b.jpeg',
    'https://content.onliner.by/news/1100x5616/97bc84af05d51e38f7440627fbb2c478.jpeg',
    'https://content.onliner.by/news/1400x5616/8a92c85e51ed1341829fc3fa84ff94fc.jpeg',
    'https://content.onliner.by/news/1100x5616/7588ff3ad7a6adeb4c725bfaf78329df.jpeg',
    'https://content.onliner.by/news/1400x5616/1284f50e51e27a1ac26baca80ff057dc.jpeg'
]

export default class App extends React.Component {
    render() {
        return (
            <View style={{marginTop: 50, width, height}}>
                <ScrollView pagingEnabled horizontal style={{width, height}}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={{index}}
                                source={{uri: image}}
                                style={{width, height, resizeMode: 'cover'}}/>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
};
