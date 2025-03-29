import imageBasketball from "../assets/basketball.png";
import useDrag from "./useDrag";

function Basketball() {
  const { isDragging, handleMouseDown, position } = useDrag();

  return (
    <img
      src={imageBasketball}
      alt="Basketball"
      className="basketball"
      style={{
        width: "50px",
        height: "50px",
        position: "absolute",
        cursor: isDragging ? "grabbing" : "grab",
        left: `${position.x - 25}px`, // Offset the ball by half its width to center
        top: `${position.y - 25}px`,  // Offset the ball by half its height to center
        zIndex: isDragging ? 10 : 1,  // Make the ball float above when dragging
      }}
      onMouseDown={handleMouseDown} // Trigger drag on mouse down
    />
  );
}

export default Basketball;