import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';
import Logo from '../components/logo';
export default function signUp({navigation}) {
  const [phone, setphone] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{height: '100%', width: '100%', opacity: 0.7}}>
      <View style={styles.container}>
        <Logo />
        <View style={{justifyContent:'center'}}>
          <Text style={styles.heading}>Signup Here</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor={'#A9A9A9'}
            onChangeText={phone => {
              setphone(phone);
            }}></TextInput>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (!phone) {
                Alert.alert('Invalid', 'Enter Email Address:');
                return;
              }
              navigation.navigate('verification');
            }}>
            <Text style={styles.btnText}>Send OTP</Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: '10%',
                marginLeft: '11%',
              }}>
              Already have an account ? SIGNIN HERE
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:-50
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#708090',
  },
  input: {
    height: 55,
    fontSize: 24,
    borderWidth: 1.5,
    borderColor: '#6D60F9',
    borderStyle: 'solid',
    marginTop: 10,
    marginBottom: 8,
    margin: 25,
    borderRadius: 8,
    paddingLeft: 20,
  },
  btn: {
    height: 50,
    width: 210,
    backgroundColor: '#6D60F9',
    marginTop: '07%',
    marginLeft: '20%',
    marginRight: 25,
    borderRadius: 50,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: 'yellow',
    letterSpacing: 1,
    color: '#fff',
    marginTop: 10,
  },
});
