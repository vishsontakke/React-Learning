// src/components/Contact.jsx
import React, { useState } from "react";
import About from "./About";

const Contact = () => {
    const [name, setName] = useState("");

    return (
        <div>
            < About/>
            <h1>Hello {name}</h1>
            <input
                type="text"
                value={name}
                onInput={(e) => setName(e.target.value)}
            />
            <h4>Your name is {name}</h4>
        </div>
    );
}

export default Contact;
