import "./pagebutton.css";

export default function PageButton(id, label) {
  return `
    <button id="${id}">${label}</button>
  `;
}
