import './App.css';
import Wallet from "./components/Wallet";
import Snake from "./components/Snake/Snake";
import {useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            <Wallet setLoggedIn={setLoggedIn}/>
            {loggedIn &&
                <Snake/>
            }
        </>
    );
}

export default App;
