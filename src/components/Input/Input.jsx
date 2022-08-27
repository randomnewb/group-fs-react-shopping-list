import React from "react";
import "./Input.css";
import TextField from "@mui/material/TextField"; // https://mui.com/material-ui/react-text-field/

function Input() {
    return (
        <div className="input">
            <TextField id="item" />

            <TextField id="quantity" />

            <TextField id="unit" />
        </div>
    );
}

export default Input;
