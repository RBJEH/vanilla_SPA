import "./pagination.css";

import PageButton from "./Button/pagebutton";

export default function Pagination(items = []) {
  const pageButtonGroup = items
    .map(({ id, label }) => {
      return PageButton(id, label);
    })
    .join("\n");

  return `
    ${PageButton("btn-page-prev", "&lt;")}
    <div id="page-button-group">
        ${pageButtonGroup}
    </div>
    ${PageButton("btn-page-next", "&gt;")}
  `;
}
