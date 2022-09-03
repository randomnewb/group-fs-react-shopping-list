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
            url: "/grocery",
        })
            .then((response) => {
                setGroceryList(response.data);
            })
            .catch((error) => {
                alert("Something went wrong!");
            });
    };
    // POST

    const addGroceryItem = (evt) => {
        evt.preventDefault();
        axios({
            method: "POST",
            url: "/grocery",
            data: {
                item: groceryName,
                quantity: groceryQuantity,
                unit: groceryUnit,
                purchased: false,
            },
        })
            .then((response) => {
                setGroceryName(""),
                    setGroceryQuantity(""),
                    setGroceryUnit(""),
                    fetchGrocery();
            })
            .catch((error) => {
                console.log(error);
                alert("Something wrong in axios POST");
            });
    };

    // PUT (all)
    const resetGrocery = () => {
        console.log("in resetGrocery (all)");
        axios({
            method: "PUT",
            url: `/grocery`,
        })
            .then((response) => {
                fetchGrocery();
            })
            .catch((error) => {
                console.log(error);
                alert("There's an error.");
            });
    };

    // PUT (by id)

    const groceryPurchase = (grocery) => {
        console.log("In purchase");
        axios({
            method: "PUT",
            url: `/grocery/${grocery.id}`,
        })
            .then((response) => {
                console.log(response);
                fetchGrocery();
            })
            .catch((error) => {
                alert("Something went wrong!");
            });
    };

    // DELETE (all)
    const clearGrocery = () => {
        console.log("in clearGrocery (all)");
        axios({
            method: "DELETE",
            url: `/grocery`,
        })
            .then((response) => {
                fetchGrocery();
            })
            .catch((error) => {
                console.log(error);
                alert("There's an error.");
            });
    };

    // DELETE (by id)

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <Input />
            <Grocery
                clearGrocery={clearGrocery}
                resetGrocery={resetGrocery}
            />
            <Grocery />
            <Item
                groceryList={groceryList}
                groceryPurchase={groceryPurchase}
                // groceryDelete={groceryDelete}
            />
        </div>
    );
}

export default App;
