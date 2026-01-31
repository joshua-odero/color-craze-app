// Key used to store colors in localStorage
const STORAGE_KEY = "savedColors";

// Get all saved colors
export function getSavedColors() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save a new color
export function saveColor(color) {
  const savedColors = getSavedColors(); // get existing colors
  savedColors.push(color);              // add new color
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(savedColors)          // save back as JSON
  );
}


