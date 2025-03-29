import imageBasketball from "../assets/basketball.png";
import useDragger from "./Usedragger"; // Correct import path for useDragger

function Basketball() {
  useDragger("basketball"); // Call the custom hook with the id of the element

  return (
    <img
      id="basketball" // Assign id here so it matches the useDragger hook
      src={imageBasketball}
      alt="Basketball"
      className="basketball"
      style={{
        width: "80px",
        height: "80px",
        position: "absolute",
        cursor: "grab",  // You can update this based on your state if needed
        zIndex: 10, // To ensure it's above other elements
      }}
    />
  );
}

export default Basketball;