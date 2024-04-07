import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Switch,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';
import Logo from '../components/logo';

export default function login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [IsEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{height: '100%', width: '100%', opacity: 0.7}}>
      <View style={styles.container}>
        <Logo />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.heading}>Signin Here</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor={'grey'}
            onChangeText={email => {
              setemail(email);
            }}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={'grey'}
            onChangeText={password => {
              setpassword(password);
            }}></TextInput>
          <View style={styles.container2}>
            <Switch
              trackColor={{false: '#818589'}}
              onValueChange={toggleSwitch}
              value={IsEnabled}
              style={{
                transform: [{scaleX: 1.2}, {scaleY: 1.2}],
                marginLeft: 35,
              }}></Switch>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
              Remember{' '}
            </Text>
            <Pressable
              onPress={() => {
                Alert.alert('Forgot Password');
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 10,
                  marginLeft: '27%',
                }}>
                Forgot Password
              </Text>
            </Pressable>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (!email) {
                Alert.alert('Invalid', 'Enter Email Address:');
                return;
              }
              if (password == '') {
                Alert.alert('Invalid', 'Enter Password:');
                return;
              }
              navigation.navigate('Landing');
            }}>
            <Text style={styles.btnText}>SIGNIN</Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: '6%',
                marginLeft: '14%',
              }}>
              Don't you have an account ? SIGNUP HERE
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
  },
  container1: {
    // marginTop:StatusBar.currentHeight,
    width: '100%',
    height: '30%',
    backgroundColor: '#6D60F9',
    display: 'flex',
  },
  container2: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  logo: {
    height: 150,
    width: 200,
    resizeMode: 'cover',
    margin: '25%',
    marginTop: '22%',
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
    marginLeft: '25%',
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
