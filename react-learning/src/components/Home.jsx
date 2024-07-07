import React, { useEffect } from "react";
import { useState } from "react";
// import Contact from './components/contact';
// import Contact from './components/Contact';
import Contact from './Contact'; 
// import Contact from ;

const Home = () => {
    const [timmer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timmer + 3);
        },1000);
    },[])

    return (
        <div>
            <h1>Hello Vishal This is new home Component</h1>
            <h6>Timer: {timmer}</h6>
            <button onClick={() => setTimer(timmer + 3)}>Click</button>
            < Contact />
        </div>
    );
};
export default Home;