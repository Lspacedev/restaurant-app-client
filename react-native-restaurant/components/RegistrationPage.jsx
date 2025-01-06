import React from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, Button, View, Alert,Image } from 'react-native';
import axios from 'axios';

export default function RegistrationPage(){
  const [name, setName] = useState();
  const [email, seEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

    return(
        <div>
            <View style={styles.container}>
       {/* <Image
        source={require('../assets/images/food-plate.jpg')}
        style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
      /> */}
            <h1>Registration</h1>
            <TextInput
      style={styles.input}
      placeholder="Username"
      value={name}
      onChangeText={(value) => handleInput('name', value)}
    />
    <TextInput
      style={styles.input}
      placeholder="email"
      value={email}
      onChangeText={(value) => handleInput('email', value)}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={(value) => handleInput('password', value)}
      secureTextEntry
    />
    <Button title="Sign Up" onPress={handleSubmit} />
    <p>Forgot password</p>
    <Text>New user:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor:'black',
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