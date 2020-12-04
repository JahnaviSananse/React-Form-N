import react from 'react';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FirstPage = ({navigation}) => {

    const [email, setEmail] = useState('');

    const validateProceed = () => {
        let isValidate = false;
        let mailFormat = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        );
        let message = '';
        if (email === '') {
          message = 'please enter your email address!';
        } else if (!mailFormat.test(email)) {
          isValidate = false;
          message = 'Please enter valid email address.';
        } 
        else{
            return true;
        }
    
        if (isValidate === false) {
          alert(message);
        }
      };
    

  const renderSignup = () => {
    return (
      <View
        style={{
          height: '65%',
          width: '100%',

          backgroundColor: 'pink',
        }}>
        <Text
          style={{
            marginTop: 70,
            marginLeft: 9,
            fontSize: 20,
            marginBottom: 10,
          }}>
          {' '}
          Email Address :{' '}
        </Text>

        <TextInput 
         onChangeText={(text) => setEmail(text)}
         value={email}
        placeholder={' abc@gmail.com '} style={styles.textinput} />

        <View style={styles.loginButton}>
        <TouchableOpacity
            onPress={() => {  
            if(validateProceed()){ 
            navigation.navigate('resetPass_nav');}
            }}>
            <Text style={styles.loginText}> PROCEED </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View style={{backgroundColor: 'red', height: '27%'}}>
        <View
          style={{backgroundColor: 'green', height: 90, flexDirection: 'row'}}>
          <Image
            style={{top: 10, marginLeft: 65}}
            source={require('./boy.png')}
          />
          <Text style={{fontSize: 40, marginTop: 15}}> LoanTack </Text>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'yellow',
            alignSelf: 'center',
            marginTop: 25,
          }}>
          <Text style={{fontSize: 30, padding: 5}}>Forgot Password</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'grey',
        //justifyContent: 'center',
      }}>
      {renderTabs()}
      {renderSignup()}
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  loginButton: {
    width: '60%',
    marginTop: '50%',
    marginLeft: 20,
    left: 65,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 70,
  },
});
