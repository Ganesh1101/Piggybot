import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from "react-native";

export default function Success({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <View>
                <Image style={styles.success} source={require('../../assets/success.png')}/>
            <Text style={styles.text}>Verification Successful</Text>
            <TouchableOpacity style={styles.btn} onPress={()=> { navigation.navigate('Login')}}>
                <Text style={styles.btnText}>Login Now </Text>
            </TouchableOpacity>
            </View>
        </View>
    )

}
const styles=StyleSheet.create({
   container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#fff'
   },
   container1:{
    //marginTop:StatusBar.currentHeight,
    width:'100%',
    height:'30%',
    backgroundColor:'#fff',
},
logo:{
    height:130,
    width:200,
    resizeMode:'cover',
    margin:'25%',
    marginTop:'22%'    
},
btn:{
    height:50,
    width:220,
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
text:{
    fontSize:22,
    marginLeft:"22%",
    marginBottom:'8%'
},
success:{
    width:150,
    height:150,
    marginTop:'15%',
    marginLeft:'30%',
    marginBottom:'5%'
}
})