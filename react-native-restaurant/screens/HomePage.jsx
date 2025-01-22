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
        console.error("Error fetching restaurants:", error);
        Alert.alert("Error", "Unable to fetch restaurants.");
      }
    };
    fetchRestaurant();
  }, []);

  // Render each room as a grid item
  const renderRestaurant = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.img || "https://via.placeholder.com/150" }} 
        style={styles.image} 
      />
      <Text style={styles.title}>{item.table}</Text>
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

  const handleBooking = (tableId) => {
    Alert.alert("Booking", `Room ${tableId} booked successfully!`);
    // Navigate to another screen or handle booking logic
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRestaurant}
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