import {useState} from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, Button, View, Alert,Image } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

export default function RegistrationPage(){
  const [name, setName] = useState();
  const [email, seEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  // axios.post('http://localhost:3001/register', {name, email, password})

    return(
        <div>
            <View style={styles.container}>
       <Image
        source={require('../assets/images/food-plate.jpg')}
        style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
      />
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
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Link href="../components//LoginPage.jsx" style={styles.linkText}>Already have an account? Log In</Link>
      {/* <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity> */}
    {/* <Button title="yes" onPress={handleSubmit} />
      <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity> */}
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
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 25,
      width: '60%',
      alignItems: 'center',
      marginVertical: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    linkText: {
      color: '#fff',
      marginTop: 20,
      textDecorationLine: 'underline',
    }
    
  });