import imageBasketball from '../assets/basketball.png';
import { useState } from "react";


function Basketball() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [dragging, setDragging] = useState(false);

    const handleMouseDown = (e) => {
        setDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPosition({ x: e.clientX - 25, y: e.clientY - 25 });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };


    return (
        <>
           <img
                src={imageBasketball}
                alt="Basketball"
                className="basketball"
                style={{
                    position: "absolute",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: "50px",
                    height: "50px",
                    cursor: "grab",
                    zIndex: 10,
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
        </>
    )
}

export default Basketball;