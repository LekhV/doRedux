import React from 'react'
import { View,Image,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {w } from '../../../constans'

const ImageCard =({ data, onPress }) => {
    const{container,sub, h1, cover} = styles
    const { image, name } = data
    const img = `https${image.medium.slice(4)}`
    return (
        <TouchableOpacity onPress={onPress}>
        <View style = {container}>
        <View style = {sub}>
            <Image style = {cover}
             source={{uri: img}}/>
        </View>
        <Text style = {h1}>{name.toUpperCase()}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width:w/2.4,
        paddingVertical: 10
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4,
        borderRadius: 10
    },
    h1: {
        paddingTop: 10,
        fontFamily: 'AvenirNext-DemiBold ',
        fontSize: 18,
        alignSelf : 'center',
        textAlign: 'center',
        width: w/2.4
    },
    cover: {
        width: w/2.4,
        height: w * 0.7,
        borderRadius: 10
    }
})

export {ImageCard}