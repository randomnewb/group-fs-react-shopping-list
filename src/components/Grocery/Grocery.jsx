import "./Grocery.css";

function Grocery({clearGrocery, resetGrocery}) {
    return (
        <div className="grocery-component">
            <h2>Shopping List</h2>
            <button onClick={clearGrocery}>Clear</button>
            <button onClick={resetGrocery}>Reset</button>
        </div>
    );
};

export default Grocery;
