// src/components/Contact.jsx
import React, { useState } from "react";
import About from "./About";

const Contact = () => {
    const [name, setName] = useState("");

    return (
        <>       
            <div className="container mt-5">
                {/* <About /> */}
                <div className="card p-3">
                    <h1 className="mb-4">Hello {name}</h1>
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={name}
                        onInput={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <h4 className="mb-3">Your name is {name}</h4>
                </div>
            </div>
        </>

    );
}

export default Contact;
