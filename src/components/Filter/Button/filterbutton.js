import "./filterbutton.css";

export default function FilterButton(id, label) {
  return `
    <button id="${id}">${label}</button>
  `;
}
