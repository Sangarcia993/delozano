import React, { useState } from "react";
import "../../App.css";


export default function Products() {
    const [hover, setHover] = useState("");
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
        setMousePosition({x: e.screenX, y: e.screenY});

        console.log(hover);
    }

    return (
    <div onMouseMove={(e) => handleMouseMove(e)}>
        
        <div>
            <h1 className="products">Productos</h1>
        </div>
        <div className="collares">
            <h2>Collares</h2>
                <div className="collares__wrapper">
                    <img src="images/collar-1.jpeg"/>
                    <img src="images/collar-2.jpeg"/>
                    <img src="images/collar-3.jpeg"/>
                    <img src="images/collar-4.jpeg"/>
                    <img src="images/collar-5.jpeg"/>
                    <img src="images/collar-6.jpeg"/>
                </div>
            <h2>Pulseras</h2>
                <div className="collares__wrapper">
                    <img src="images/pulseras-1.jpeg"/>
                    <img src="images/pulseras-2.jpeg"/>
                    <img src="images/pulseras-3.jpeg"/>
                    <img src="images/pulseras-4.jpeg"/>
                </div>
            <h2>Miyuki</h2>
                <div className="collares__wrapper">
                    <img src="images/miyuki-1.jpeg"/>
                    <img src="images/miyuki-2.jpeg"/>
                </div>
            {hover && (
                <div
                    className="hovered-image-container"
                    style={{
                        position: "absolute",
                        left: `${mousePosition.x}`,
                        top: `${mousePosition.y}`,
                        zIndex: 1000,
                        width: "100%",
                        height: "100%",
                        
                        
                        pointerEvents: "none", // Allows clicking on elements behind the image
                    }}
                >
                    <img src={hover} alt="Hovered" style={{ width: "100%", height: "100%", objectFit: "fill", position: "static"}}/>
                </div>
            )}
        </div>

        
    </div>
    
    );
}