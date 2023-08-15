import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    const [bg, setbg] = useState("black");

    return (
        <>
            <h1 style={{ color }}>My favorite color is!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <div style={{}}>hello</div>

            <button type="button"
                onClick={() => setbg("red")}>

            </button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);


export default FavoriteColor