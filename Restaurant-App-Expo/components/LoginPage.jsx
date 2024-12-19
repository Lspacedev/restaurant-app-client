import React from 'react';
import { StyleSheet, TextInput, Text, Button, View, Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage(){
    const navigation = useNavigation();

    return(
        <div>
            <View style={styles.container}>
       <Image
        source={require('@/assets/images/food-plate.jpg')} // Adjust the path to match your project structure
        style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
      />
            <h1>Login</h1>
            <TextInput
      style={styles.input}
      placeholder="Username"
      //value={data.email}
      onChangeText={(value) => handleInput('email', value)}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      //value={data.password}
      onChangeText={(value) => handleInput('password', value)}
      secureTextEntry
    />
    {/* <Button title="Sign Up" onPress={handleSubmit} /> */}
    <p>Forgot password</p>
    <p>New user: Signup</p>
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor:'#FF4C52',
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
        borderColor:'#ffffff',
        height: 40,
        width: "50%",
        padding:25,
        margin:2,
        borderRadius:25
    }
    
  });