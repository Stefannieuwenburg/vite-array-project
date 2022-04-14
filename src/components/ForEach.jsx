import React from "react";
import "../App.css";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
let itemList = [];

items.forEach((item, i) => {
    itemList.push(<li key={i}>{item}</li>);
});

export default function forEach() {
    return (
        <>
            <h2>This is a simple list of items</h2>
            <ul>{itemList}</ul>
        </>
    );
}


