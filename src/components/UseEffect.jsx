import { useState, useEffect } from "react";
import axios from "axios";

import "../App.css"

export default function UseEffect(props) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("https://reqres.in/api/users?page=2")
            .then((res) => {
                console.log(res.data.data);
                setUserData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="axioscontainer">
            {userData.map((data, id) => {
                return (
                    <ul key={id}>
                        <h2>{data.first_name} </h2>
                        <h2>{data.last_name}</h2>
                        <li>{data.email}</li>
                    </ul>
                );
            })}
        </div>
    );
}
