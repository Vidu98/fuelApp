// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import SignUpScreen from './screens/SignUpScreen';
// // import DynamicForm from './screens/DynamicForm';
// import AuthScreen from './screens/AuthScreen';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AuthScreen/>
//       {/* <SignUpScreen/> */}
//       {/* <StatusBar style="auto" /> */}
//       {/* <DynamicForm/> */}
//     </View>
   

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#9FE2BF',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });




// App.js
import React, { useEffect, useState } from 'react';
import AppNavigator from './AppNavigator';

import * as Location from 'expo-location';

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <AppNavigator />
  );
};

export default App;





