function DropZone({ onDrop }) {

  // Called when a shape is dropped onto this zone
  const handleDrop = (e) => {
    e.preventDefault(); // prevent default browser behavior
    const color = e.dataTransfer.getData("color"); // get the color stored during drag
    onDrop(color); // pass the color back to the parent 
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()} // allow dropping by preventing default
      onDrop={handleDrop}                     // trigger drop logic when a shape is dropped
      className="drop-zone"                   
    >
      Drop 2 colors here to mix
    </div>
  );
}

export default DropZone; 

