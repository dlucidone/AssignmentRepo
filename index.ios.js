 import React, { Component } from 'react';
 import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

var Test = React.createClass(
{

// Initial state of username and password is set
  getInitialState: function() {
    return {
      username: '',
      password: '',
    }
  },
// this function invoke after event on alert cancel trigger which clears down the field data 
  noPressed:function(fieldName1,fieldName2)
  {
    this.refs[fieldName1].setNativeProps({text: ''});
    this.refs[fieldName2].setNativeProps({text: ''});
  },
  // this function invokes with the login button click
  onSubmitClick:function(event)
  {

    var username = this.state.username;
    var password = this.state.password;

    Alert.alert(
      'AlertPrompt',
      'Username-'+username+" "
      +'password-'+password,
      [

      {text: 'Cancel', onPress: this.noPressed('usr','psw'), style: 'cancel'},

      ]
      )



  },

// this function re-renders each time there is a change in state 
  render:function() {
    return (
      <View style={styles.container}>

      <TextInput
      ref="usr"
      style={styles.usernameInput}
      placeholder= "Enter username "
      returnKeyType = {"next"} 
      autoCapitalize = "none"
      autoCorrect = {false}
      clearButtonMode = 'while-editing'
      onChangeText={(text) => {
        this.setState({username:text});
      }}
      onSubmitEditing={(event) => {
       this.refs.psw.focus();

     }}/>
     <TextInput
     ref="psw"
     style={styles.passwordInput}
     placeholder= "Enter password"
     autoCapitalize = "none"
     autoCorrect = {false}
     returnKeyType = {'done'}
     secureTextEntry = {true}
     clearButtonMode = 'while-editing'
     onChangeText={(text) => {
      this.setState({password:text});}}
      onSubmitEditing={this.onSubmitClick}
    
    />

{/*// The callback function onSubmitEditing can be used to trigger the action and value can be extracted from the text field
// onSubmitEditing={(event) => this.updateText( event.nativeEvent.text)}
// this can be used if redirection is done through keyboard (I have done both )*/}
    
    <TouchableHighlight
    style={styles.button}
    underlayColor={'#328FE6'}
    onPress={this.onSubmitClick}>
    <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableHighlight>

    </View>
    );
  }
}
);

// Stylesheet to cater the UI on the screen 
// It should be placed in a separate file if som components posses same property style
// Dimensions class can be used to style component as per the width and height of device whicj makes Rendering of component on any size of devices 
// import Dimensions from 'Dimensions'; 

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  passwordInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 ,
    padding:10,
    marginTop: 10,
    marginLeft : 5 ,
    marginRight : 5,
    marginBottom:20

  },
  usernameInput:
  {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 , 
    marginTop: 10 , 
    padding : 10 ,
    marginLeft : 5 , 
    marginRight : 5 
  }


});

AppRegistry.registerComponent('Test', () => Test);
