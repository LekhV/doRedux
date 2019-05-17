import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {w } from '../../../constans'
const Header = ({ title,detail, onPress,leftIcon, leftColor }) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
    return(
        <View style={viewStyle}>
        <TouchableOpacity onPress={onPress}>
        <Ionicons name={leftIcon}
        style={[leftButtonStyle, {paddingLeft:detail? 10: 25}]}
        color={leftColor}/>
        </TouchableOpacity> 
        <Text numberOfLines={1} ellipsizeMode='tail' style={[textStyle, {paddingLeft: leftIcon? 10: 0}]}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative', 
      height: 60
  
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
      paddingTop: 10,
          width: w-40
  },
  leftButtonStyle: {
    fontSize: 35,
      paddingTop: 10
  }
})

  export {Header}