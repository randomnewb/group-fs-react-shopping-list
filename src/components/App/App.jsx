import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import Input from "../Input/Input.jsx";
import Grocery from "../Grocery/Grocery.jsx";
import Item from "../Item/Item.jsx";
import "./App.css";

function App() {
    //useState
    const [groceryList, setGroceryList] = useState([]);
    const [groceryName, setGroceryName] = useState("");
    const [groceryQuantity, setGroceryQuantity] = useState("");
    const [groceryUnit, setGroceryUnit] = useState("");

    useEffect(() => {
        fetchGrocery();
    }, []);

    // GET
    const fetchGrocery = () => {
        axios({
            method: "GET",
            url: "/Grocery",
        })
            .then((response) => {
                setGroceryList(response.data);
            })
            .catch((error) => {
                alert("Something went wrong!");
            });
    };
    // POST

    // PUT (all)

    // PUT (by id)

    // DELETE (all)

    // DELETE (by id)

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <Input />
            <Grocery />
            <Item groceryList={groceryList} />
        </div>
    );
}

export default App;
