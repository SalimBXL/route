import React from "react";
import { useParams } from "react-router-dom";

const Food = () => {
    let {foodName, drinkName} = useParams();
    return (
        <div>
            <h1>FOOD</h1>
            <h1>Food Name : {foodName}</h1>
            <h1>Drink name : {drinkName}</h1>
        </div>
    );
}

export default Food;