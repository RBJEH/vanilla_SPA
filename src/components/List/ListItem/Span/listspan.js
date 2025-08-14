import "./listspan.css";

export default function ListSpan(idx, name, aliases, title, books, tvSeries) {
  return `    
    <div class="infos">
        <label for="name-${idx}">name:</label>
        <span id="name-${idx}" class="ellipsis">${name}</span>
    </div>
    <div class="infos">
        <label for="aliases-${idx}">aliases:</label>
        <span id="aliases-${idx}" class="ellipsis" title=${aliases}>${aliases}</span>
    </div>
    <div class="infos">
        <label for="title-${idx}">title:</label>
        <span id="title-${idx}" class="ellipsis" title=${title}>${title}</span>
    </div>
    <div class="infos hidden-info"></div>
    <div class="infos">
        <label for="books-${idx}">books:</label>
        <span id="books-${idx}">${books}</span>
    </div>
    <div class="infos">
        <label for="tvseries-${idx}">tvSeries:</label>
        <span id="tvseries-${idx}">${tvSeries}</span>
    </div>
    `;
}
