import React from "react";
import { v4 as uuidv4 } from "uuid";
import { items } from "./components/Data";

import "./App.css";

export default function Filter(props) {
    return (
        <>
            <ul>
                LIST OUT:
                {items
                    .filter((item) => item.name === "Book")
                    .map((item) => (
                        <li key={uuidv4()}>
                            <big>{item.price}</big>
                        </li>
                    ))}
            </ul>
        </>
    );
}
