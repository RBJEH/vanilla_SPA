import "./listitem.css";

import ListSpan from "./Span/listspan";
import ListButton from "./Button/listbutton";

export default function ListItem(idx, name, aliases, title, books, tvSeries) {
  return `
  <div id="list-item-${idx}" class="list-items">
    <div class="summary-content">
        ${ListSpan(idx, name, aliases, title, books, tvSeries)}
    </div>
    <div class="delete-content">
        ${ListButton(idx)}
    </div>
  </div>
  `;
}
