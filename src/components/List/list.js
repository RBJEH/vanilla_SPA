import "./list.css";

import Pagination from "../../components/Pagination/pagination.js";

export default function List() {
  const pages = [
    { id: "page-1", label: 1 },
    { id: "page-2", label: 2 },
    { id: "page-3", label: 3 },
    { id: "page-4", label: 4 },
    { id: "page-5", label: 5 },
    { id: "page-6", label: 6 },
    { id: "page-7", label: 7 },
    { id: "page-8", label: 8 },
    { id: "page-9", label: 9 },
    { id: "page-10", label: 10 },
  ];

  return `
    <div id="content-list">
        <div id="content">빈칸 되면 안됨!!</div>
        <div id="pagination">
          ${Pagination(pages)}
        </div>
    </div>
    `;
}
