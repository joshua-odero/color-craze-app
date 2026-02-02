// Key used to store colors in localStorage
const STORAGE_KEY = "savedColors";

// Get all saved colors
export function getSavedColors() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parsed = JSON.parse(data);
  return Array.isArray(parsed) ? parsed : [];
}

// Save a new color object
export function saveColor(colorData) {
  const savedColors = getSavedColors();
  savedColors.push(colorData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedColors));
}
