import "./filter.css";

import FilterButton from "./Button/filterbutton";

export default function Filter() {
  return `
  <div id="filter-button-group">
    ${FilterButton("btn-filter-alive", "생존인물만")}
    ${FilterButton("btn-filter-femeal", "여자")}
    ${FilterButton("btn-filter-tvseries", "TV Series 없음")}
    ${FilterButton("btn-reset", "초기화")}
  </div>
  `;
}
