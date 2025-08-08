import "./filtertoggle.css";

export default function FilterToggle(id) {
  return `
  <input type="checkbox" id="${id}" class="hidden-checkbox" />
  `;
}
