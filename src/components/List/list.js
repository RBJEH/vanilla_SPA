import "./list.css";

import Pagination from "../../components/Pagination/pagination.js";

import { renderListItemsHTML } from "../../utils/listRenderer.js";

export default async function List(page = 1) {
  const pages = Array.from({ length: 10 }, (_, i) => ({
    id: `page-${i + 1}`,
    label: i + 1,
  }));

  const listItemsHTML = await renderListItemsHTML(page);

  return `
    <div id="content-list">
        <div id="content">
          ${listItemsHTML}
        </div>
        <div id="pagination">
          ${Pagination(pages)}
        </div>
    </div>
    `;
}
