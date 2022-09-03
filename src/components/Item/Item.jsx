import React from "react";
import "./Item.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Item({ groceryList }) {
    return (
        <Grid>
            {groceryList.map((grocery) => {
                return (
                    <Card key={grocery.id}>
                        <CardContent>
                            <Typography>
                                {grocery.item} {grocery.quantity} {grocery.unit}
                            </Typography>
                            <CardActions>
                                <Button>Buy</Button>
                                <Button>Delete</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Item;
