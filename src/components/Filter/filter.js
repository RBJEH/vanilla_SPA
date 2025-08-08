import "./filter.css";

import FilterButton from "./Button/filterbutton";
import FilterToggle from "./Toggle/filtertoggle";

export default function Filter() {
  return `
  <div id="filter-toggle-group">
    ${FilterToggle("toggle-filter-alive")}
    ${FilterButton("btn-filter-alive", "생존인물만")}
    ${FilterToggle("toggle-filter-femeal")}
    ${FilterButton("btn-filter-femeal", "여자")}
    ${FilterToggle("toggle-filter-tvseries")}
    ${FilterButton("btn-filter-tvseries", "TV Series 없음")}
    ${FilterButton("btn-reset", "초기화")}
  </div>
  `;
}
