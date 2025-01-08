import React from 'react';
import { StyleSheet, TextInput, Text, Button, View, Alert,Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

export default function LoginPage(){
  const [name, setName] = useState();
  const [email, seEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

    return(
        <div>
            <View style={styles.container}>
       <Image
        source={require('../assets/images/food-plate.jpg')}
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
    <Text>New user:</Text>
    <Pressable>
      <Link href="/react-native-restaurant/components/RegistrationPage" style={{color:"#FFFFFF"}}>Sign up</Link>
    </Pressable>
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