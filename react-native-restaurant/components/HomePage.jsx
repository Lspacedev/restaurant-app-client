import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3001/restaurants"); 
        setRestaurants(response.data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setError("Unable to fetch restaurants.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const Item = ({ name, imageUrl, days, hours }) => (
    <View style={styles.item}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>Days: {days}</Text>
      <Text style={styles.details}>Hours: {hours}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#FF4C52" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              imageUrl={item.imageUrl}
              days={item.days}
              hours={item.hours}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#FF4C52",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: 16,
    color: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#FF4C52",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;



// import React from 'react';
// import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import * as NavigationBar from 'expo-navigation-bar';



// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Restaurant One',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Restaurant Two',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Restaurant Three',
//   },
// ];

//  useEffect(() => {
//     const fetchRestaurant = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/restaurants");
//         setRestaurant(response.data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//         Alert.alert("Error", "Unable to fetch restaurants.");
//       }
//     };
//     fetchRestaurant();
//   }, [])


// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => (
//   <SafeAreaProvider>
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   </SafeAreaProvider>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#FF4C52',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;