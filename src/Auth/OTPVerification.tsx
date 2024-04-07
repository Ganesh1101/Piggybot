import { View, StyleSheet, StatusBar, Text, Image, TextInput, TouchableOpacity, Alert, Pressable, KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import Logo from "../components/logo";
export default function OTP_verification({navigation}){
const [email, setemail]=useState('');

    return(
    <KeyboardAvoidingView  style={{ flex: 1,position:'absolute'}}>   
    <View style={styles.container}>
        <Logo />
        <View>
        <Text style={styles.heading}>Verify OTP</Text>
        
        <TextInput style={styles.input} placeholder='Enter OTP' placeholderTextColor={'#A9A9A9'} onChangeText={(email)=>{setemail(email)}}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={()=> { if (!email) {Alert.alert('Invalid', 'Enter Mobile Number:');return;} navigation.navigate('Success')}}>
            <Text style={styles.btnText}>Verify </Text>
        </TouchableOpacity>
        
        </View>
       
        
    </View>
    </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    container1:{
        //marginTop:StatusBar.currentHeight,
        width:'110%',
        height:'35%',
        backgroundColor:'#6D60F9',
    },
    logo:{
        height:150,
        width:200,
        resizeMode:'cover',
        margin:'25%',
        marginTop:'22%'    
    },
    heading:{
        fontSize:24,
        marginLeft:'35%',
        marginTop:'30%',
        marginBottom:'0%',
        color:'#708090'
    },
    input:{
        height:80,
        fontSize:24,
        borderWidth:1.5,
        borderColor:'#6D60F9',
        borderStyle:'solid',
        marginTop:50,
        marginBottom:8,
        margin:25,
        borderRadius:45,
        textAlign:'center'
    },
    btn:{
        height:50,
        width:240,
        backgroundColor:'#6D60F9',
        marginTop:'07%',
        marginLeft:'23%',
        marginRight:25,
        borderRadius:50,
         
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        textShadowColor:'yellow',
        letterSpacing:1,
        color:'#fff',
        marginTop:10
    },
})