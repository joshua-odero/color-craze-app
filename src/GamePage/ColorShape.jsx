function ColorShape({ color, shape }) {

  // Called when user starts dragging the shape
  const handleDragStart = (e) => {
    // Store the color value in the drag event so DropZone can access it
    e.dataTransfer.setData("color", color);
  };

  return (
    <div
      draggable // makes the div draggable
      onDragStart={handleDragStart} // trigger drag logic when dragging starts
      style={{
        width: 60, 
        height: 60, 
        backgroundColor: color, 
        borderRadius: shape === "circle" ? "50%" : "0", 
        clipPath:
          shape === "triangle"
            ? "polygon(50% 0%, 0% 100%, 100% 100%)" 
            : "none", 
      }}
    />
  );
}

export default ColorShape; 
