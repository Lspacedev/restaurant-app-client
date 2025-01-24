import { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://restaurant-app-backend-sandy.vercel.app/');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
