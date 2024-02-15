import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {app} from '../firebaseConfig';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


const SignupScreen = ({ navigation }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignup = (emailOrUsername, password) => {
    const auth = getAuth(app);
    auth.createUserWithEmailAndPassword(auth,emailOrUsername, password)
        .then(userCredentials =>{
          const user = userCredentials.user;
          console.log("SIGNUP USER", user);
        })
        .catch((error) =>{
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error", error)
        });


    console.log('Signup successful!');

    // Reset input fields
    setEmailOrUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        value={emailOrUsername}
        onChangeText={(text) => setEmailOrUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.signupButton} /*onPress={handleSignup}*/ title="Go to the main page"
        onPress={() => navigation.navigate('Main')} >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup} title="Go to the Register page"
       /*</View> onPress={() => navigation.navigate('Register')}*/ >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* <Button
        title="Go to Register Page"
        onPress={() => navigation.navigate('Register')}
      /> */}
  
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SignupScreen;



