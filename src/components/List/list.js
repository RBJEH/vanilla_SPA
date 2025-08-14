import "./list.css";

import LoadingSpinner from "./LoadingSpinner/loadingspinner.js";

import { initCharacters } from "../../hooks/useCharacters.js";

export default async function List(page = 1) {
  const listItemsHTML = await initCharacters(page);

  return `
    <div id="content-list">
        <div id="content">
          ${listItemsHTML}
        </div>
        <div id="loading" class="loading-spinner">
          ${LoadingSpinner()}
        </div>
    </div>
    `;
}
