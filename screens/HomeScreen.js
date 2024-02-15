// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/* Your Home screen components */}
      <Button
        title="Go to About Page"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;
