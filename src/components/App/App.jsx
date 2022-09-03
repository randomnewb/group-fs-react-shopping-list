<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import { useState, useEffect } from "react";
>>>>>>> 9e40842dc99a6547c985f69e893ecc5b22270408
import axios from "axios";
import Header from "../Header/Header.jsx";
import Input from "../Input/Input.jsx";
import Grocery from "../Grocery/Grocery.jsx";
import Item from "../Item/Item.jsx";
import "./App.css";

function App() {
<<<<<<< HEAD
    //Todo Axios GET to fetch items and console.log grocery items
    let [groceryArray, setGroceryArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    console.log('useEffect - page load');
    fetchGroceries();
  }, []);

  const fetchGroceries = () => {
    // TODO: fetch the list of people from the server
    axios({
      method: 'GET',
      url: '/grocery',
    }).then(response => {
      setGroceryArray(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong');
    });
  }
=======
    //useState
    const [groceryList, setGroceryList] = useState([]);
    const [groceryName, setGroceryName] = useState("");
    const [groceryQuantity, setGroceryQuantity] = useState("");
    const [groceryUnit, setGroceryUnit] = useState("");

    useEffect(() => {
        fetchGrocery();
    }, []);

    // GET

    // POST

    // PUT (all)

    // PUT (by id)

    // DELETE (all)

    // DELETE (by id)

>>>>>>> 9e40842dc99a6547c985f69e893ecc5b22270408
    return (
        <div className="App">
            <Header />
            {/* Log to the DOM */}
            {JSON.stringify(groceryArray)}
            <main>
                <p>Under Construction...</p>
            </main>
            <Input />
            <Grocery />
            <Item />
        </div>
    );
}

export default App;
