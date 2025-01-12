import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  FlatList, 
  Pressable, 
  Alert 
} from "react-native";
import axios from "axios";

export default function HomePage() {
  const [restaurant, setRestaurant] = useState([]);

  // Fetch data from API or Firebase
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get("http://localhost:3001/restaurants"); // Replace with your API endpoint
        setRestaurant(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        Alert.alert("Error", "Unable to fetch restaurants.");
      }
    };
    fetchRooms();
  }, []);

  // Render each room as a grid item
  const renderRoom = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.img || "https://via.placeholder.com/150" }} 
        style={styles.image} 
      />
      <Text style={styles.title}>{item.room}</Text>
      <Text style={styles.price}>${item.price} per night</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.capacity}>Capacity: {item.capacity}</Text>
      <Text style={styles.availability}>
        {item.availability ? "Available" : "Not Available"}
      </Text>
      <Pressable 
        style={[styles.button, item.availability ? styles.available : styles.unavailable]}
        onPress={() => handleBooking(item.id)}
        disabled={!item.availability}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </Pressable>
    </View>
  );

  const handleBooking = (roomId) => {
    Alert.alert("Booking", `Room ${roomId} booked successfully!`);
    // Navigate to another screen or handle booking logic
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRoom}
        numColumns={2} // Display items in two columns
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 8,
    flex: 1,
    maxWidth: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
  capacity: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  availability: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  available: {
    backgroundColor: "#4CAF50",
  },
  unavailable: {
    backgroundColor: "#9E9E9E",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});


// import React from "react";
// import { StyleSheet, TextInput, Text, View, Alert, Image,Pressable } from 'react-native';import { StyleSheet, TextInput, Text, View, Alert, Image,Pressable } from 'react-native';

// export default function HomePage(){
//     return (
//         <View style={styles.app}>
//           <Row>
//           <Col numRows={2}>
//           <Image
//         source={require('../assets/images/food-plate.jpg')}
//         style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
//       />
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={2}>
//           <Text>Second column</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col numRows={1}>
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={3}>
//           <Text>Second Column</Text>
//         </Col>
//           </Row>
//         </View>
//       );
// }


// const styles = {
//     app: {
//     flex: 4,
//     marginHorizontal: "auto",
//     width: 400,
//     backgroundColor: "red"
//   },
//   row: {
//     flexDirection: "row"
//   },
//   "1col":  {
//     backgroundColor:  "lightblue",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  1
//   },
//   "2col":  {
//     backgroundColor:  "green",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  2
//   },
//   "3col":  {
//     backgroundColor:  "orange",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  3
//   },
//   "4col":  {
//     flex:  4
//   }
// };

// const Row = ({ children }) => (
//     <View style={styles.row}>{children}</View>
//   )