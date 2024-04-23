/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const Intro = () => {
  return (
    <View style={styles.container}>
        <Text>Enter name to continue....</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
        />
    </View>
  );
};

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        borderColor:'orange',
        borderWidth:2,
        width,
        height:50,
        borderRadius:10,
        paddingLeft:15,
        fontSize:25,
    },
});

export default Intro;
