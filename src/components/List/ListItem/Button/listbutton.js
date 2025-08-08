import "./listbutton.css";

export default function ListButton(idx) {
  return `
    <button class="btn-item-delete" id="btn-del-${idx}">Delete</button>
    `;
}
