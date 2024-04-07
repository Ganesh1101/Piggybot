import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={{flexDirection:'row',margin:15}}>
        <Image style={{height:80,width:85,marginRight:-5}} source={require('../../assets/logo.png')} />
        <Text style={styles.title}>PiggyBot</Text>
    </View>
  )
}

export default Logo
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 29,
        paddingLeft:3,
        color: '#000'
    },
})
