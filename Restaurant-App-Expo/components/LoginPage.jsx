import React from 'react';
import { StyleSheet, TextInput, Text, Button, View, Alert } from 'react-native';

export default function LoginPage(){

    return(
        <div>
            <View style={styles.container}>
            {/* <Image
         source={require('@/assets/images/food-img.jpg')}
         style={{width:180, height:180, justifyContent: 'center', marginBottom:35}}
       /> */}
       <img src="../assets/images/food-img.jpg" alt="" srcset="" width="350" />
            <h1>Login</h1>
            <TextInput
      //style={styles.input}
      placeholder="Email"
      //value={data.email}
      onChangeText={(value) => handleInput('email', value)}
      keyboardType="email-address"
    />
    <TextInput
      //style={styles.input}
      placeholder="Password"
      //value={data.password}
      onChangeText={(value) => handleInput('password', value)}
      secureTextEntry
    />
    {/* <Button title="Sign Up" onPress={handleSubmit} /> */}
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor:'#FF4C52'
    }
    
  });