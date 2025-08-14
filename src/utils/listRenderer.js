import ListItem from "../components/List/ListItem/listitem";

import { getWorkingCharacters, deleteCharacter, resetCharacters } from "../hooks/useCharacters";
import { patch } from "./diffUtils";

const LIST_CONTAINER_ID = "content";

export function renderListItemsHTML() {
  const characters = getWorkingCharacters();
  patch(
    "#content",
    characters
      .map((char, idx) =>
        ListItem(
          char.id || idx,
          char.name || "-",
          (char.aliases || []).join(",") || "-",
          (char.titles || []).join(",") || "-",
          (char.books || []).length,
          (char.tvSeries || []).length
        )
      )
      .join("")
  );

  // document.getElementById(LIST_CONTAINER_ID).innerHTML = characters
  //   .map((char, idx) =>
  //     ListItem(
  //       char.id || idx,
  //       char.name || "-",
  //       (char.aliases || []).join(",") || "-",
  //       (char.titles || []).join(",") || "-",
  //       (char.books || []).length,
  //       (char.tvSeries || []).length
  //     )
  //   )
  //   .join("");
}

export function appendListItemsHTML(newItems) {
  const container = document.getElementById(LIST_CONTAINER_ID);
  // const html = newItems
  //   .map((char, idx) =>
  //     ListItem(
  //       char.id || `${parseInt(newItems[idx].url.slice(newItems[idx].url.lastIndexOf("/") + 1) - 1)}`,
  //       char.name || "-",
  //       (char.aliases || []).join(",") || "-",
  //       (char.titles || []).join(",") || "-",
  //       (char.books || []).length,
  //       (char.tvSeries || []).length
  //     )
  //   )
  //   .join("");

  // container.insertAdjacentHTML("beforeend", html);

  patch(
    "#content",
    container.innerHTML +
      newItems
        .map((char, idx) =>
          ListItem(
            char.id || `${parseInt(newItems[idx].url.slice(newItems[idx].url.lastIndexOf("/") + 1) - 1)}`,
            char.name || "-",
            (char.aliases || []).join(",") || "-",
            (char.titles || []).join(",") || "-",
            (char.books || []).length,
            (char.tvSeries || []).length
          )
        )
        .join("")
  );
}

export function removeListItemDOM(idx) {
  const el = document.querySelector(`#list-item-${idx}`);
  if (el) {
    el.remove();
  }
}

export function initDeleteEvents() {
  const container = document.getElementById(LIST_CONTAINER_ID);
  container.addEventListener("click", (event) => {
    const btn = event.target.closest(".btn-item-delete");
    if (!btn) return;

    const idIndex = parseInt(btn.id.replace("btn-del-", ""));
    deleteCharacter(idIndex);
    removeListItemDOM(idIndex);
  });
}

export function initResetEvent() {
  document.getElementById("btn-reset").addEventListener("click", () => {
    resetCharacters();
    renderListItemsHTML();
  });
}
