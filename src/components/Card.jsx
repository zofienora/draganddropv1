import { useState, useRef, useEffect } from "react";

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

    // Handle touch events
    const touchStart = (e) => {
        setDragging(true);
        const touch = e.touches[0];
        setStartPos({ x: touch.clientX, y: touch.clientY });
    };

    const touchMove = (e) => {
        if (!dragging) return;

        const touch = e.touches[0];
        const newX = touch.clientX - startPos.x;
        const newY = touch.clientY - startPos.y;

        setPosition((prev) => ({
            x: prev.x + newX,
            y: prev.y + newY,
        }));

        setStartPos({ x: touch.clientX, y: touch.clientY });
    };

    const touchEnd = () => {
        setDragging(false);
    };

    // Add event listeners on component mount and clean up on unmount
    useEffect(() => {
        const card = cardRef.current;

        // Mouse events
        card.addEventListener('mousedown', mouseDown);
        card.addEventListener('mousemove', mouseMove);
        card.addEventListener('mouseup', mouseUp);

        // Touch events
        card.addEventListener('touchstart', touchStart);
        card.addEventListener('touchmove', touchMove);
        card.addEventListener('touchend', touchEnd);

        // Clean up listeners on unmount
        return () => {
            card.removeEventListener('mousedown', mouseDown);
            card.removeEventListener('mousemove', mouseMove);
            card.removeEventListener('mouseup', mouseUp);

            card.removeEventListener('touchstart', touchStart);
            card.removeEventListener('touchmove', touchMove);
            card.removeEventListener('touchend', touchEnd);
        };
    }, [dragging, startPos]);

    return (
        <>
            <div id="container">
                <div
                    id="card"
                    ref={cardRef}
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
    );
}

export default Card;