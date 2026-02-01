function ColorSlider({ value, onChange, disabled }) {
  return (
    <input
      type="range"               
      min="0"                     
      max="255"                  
      value={value}               
      onChange={(e) => onChange(Number(e.target.value))} 
    />
  );
}

export default ColorSlider; 