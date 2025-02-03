import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Meals/AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  const navigate = useNavigate();

  useEffect(() => {
    // Skip the API call part and mock data directly
    const mockData = {
      "meal1": {
        name: "Pizza",
        description: "Delicious cheese pizza",
        price: 12.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Pizza",
        offer: "Buy 1 Get 1 Free",
      },
      "meal2": {
        name: "Burger",
        description: "Juicy beef burger",
        price: 8.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Burger",
        offer: "Flat 20% Off",
      },
      "meal3": {
        name: "Pasta",
        description: "Italian pasta with tomato sauce",
        price: 10.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Pasta",
        offer: "Free Drink with Pasta",
      },
    };

    const loadedItems = [];
    for (let key in mockData) {
      loadedItems.push({ id: key, ...mockData[key] });
    }

    setMealsData(loadedItems);
    setIsLoading(false);
  }, []);

  const mealItems = mealsData.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        ₹{item.price.toFixed(2)}
      </p>
      <p style={{ color: "green", fontWeight: "bold" }}>
        <em>{item.offer}</em>
      </p>
    </MealItem>
  ));

  const exploreMoreHandler = () => {
    navigate("/menu");
  };

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>{mealItems}</ul>
      </Card>

      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        <button
          onClick={exploreMoreHandler}
          style={{
            backgroundColor: "#4d1601",
            color: "white",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4d1601")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4d1601")}
        >
          Explore More Items
        </button>
      </div>
    </section>
  );
};

export default AvailableMeals;
