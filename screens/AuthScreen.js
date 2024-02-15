import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

// Check if Firebase is already initialized
if (!firebase.apps.length) {
  // Replace this with your Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyOQhz-DNDK0gnqjFxQhr2xrox9he45X4",
    authDomain: "fuel-app-76d94.firebaseapp.com",
    projectId: "fuel-app-76d94",
    storageBucket: "fuel-app-76d94.appspot.com",
    messagingSenderId: "17148796234",
    appId: "1:17148796234:web:0ef6148b938802af94f5b3",
    measurementId: "G-9JMTC7RJ4T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed up successfully
        console.log('User signed up:', userCredential.user);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error signing up:', error);
      });
  };

  const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in successfully
        console.log('User signed in:', userCredential.user);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error signing in:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AuthScreen;