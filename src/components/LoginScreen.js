import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View ,ScrollView, TextInput} from 'react-native';

const styles = StyleSheet.create({
  PageTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginScreen = ({ navigation }) => (
    <ScrollView style={{padding: 20}}>

      <Text >
          Please Log In!
      </Text>

          <Text
              style={styles.PageTitle}>
              Login
          </Text>
          <TextInput placeholder='Username' />
          <TextInput placeholder='Password' />
          <View style={{margin:7}} />

          <Button
              onPress={() => navigation.dispatch({ type: 'Login' })}
              title="Log in"
          />

    </ScrollView>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;
