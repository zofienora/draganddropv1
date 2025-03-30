import { useState, useRef } from "react";


function Card() {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const mouseDown = (e) => {
        setDragging(true);
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    const mouseMove = (e) => {
        if (!dragging) return;
        
        const newX = e.clientX - startPos.x;
        const newY = e.clientY - startPos.y;

        setPosition((prev) => ({
            x: prev.x + newX,
            y: prev.y + newY,
        }));

        setStartPos({ x: e.clientX, y: e.clientY });
    };

    const mouseUp = () => {
        setDragging(false);
    };

    return (
        <>
            <div id="container">
                <div
                    id="card"
                    ref={cardRef}
                    onMouseDown={mouseDown}
                    onMouseMove={mouseMove}
                    onMouseUp={mouseUp}
                    style={{
                        position: "absolute",
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        cursor: "grab",
                    }}
                >
                    <div id="header">
                        <h1>Drag me!</h1>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;



