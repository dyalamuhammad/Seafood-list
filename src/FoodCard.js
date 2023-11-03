// src/components/RestaurantCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";

const FoodCard = ({ restaurants, setRestaurants }) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://api.kontenbase.com/query/api/v1/e1a42b3c-27cd-445e-b555-b55b4c1387c4/indonesianFood"
        );
        const restaurantData = response.data.map((data) => ({
          name: data.name,
          picture: data.gambar,
          price: data.harga,
          id: data._id,
        }));
        setRestaurants(restaurantData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  
  return (
    <div className="restaurant-container my-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        restaurants.slice(0).map((restaurant, index) => (
          <Card
            style={{ width: "200px", height: "240px" }}
            key={index}
            // onClick={() => onAddToBill(restaurant)}
          >
            <Card.Img
              variant="top"
              src={restaurant.picture}
              className="imgResto"
            />
            <div className="restaurant-card">
              <Card.Title className="txt-food">{restaurant.name}</Card.Title>
              <Card.Text className="d-none">{restaurant.price}</Card.Text>

            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default FoodCard;
