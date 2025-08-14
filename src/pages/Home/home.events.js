import { useFilter } from "../../hooks/useFilter";
import { appendCharacters } from "../../hooks/useCharacters";

import { renderListItemsHTML, appendListItemsHTML, initDeleteEvents, initResetEvent } from "../../utils/listRenderer";
import { patch } from "../../utils/diffUtils";

let allData = [];

export async function initHomeEvent() {
  const { initFilterAddEventListener, getCheckedFilter } = useFilter({
    onFilterStateChange: () => {
      applyFilter(getCheckedFilter());
    },
  });

  renderListItemsHTML();
  initDeleteEvents();
  initResetEvent();

  let currentPage = 1;
  let isLoading = false;
  let lastPage = 10;

  // let firstData = await appendCharacters(currentPage);
  // allData = [...allData, ...firstData];
  // applyFilter(getCheckedFilter());

  window.addEventListener("scroll", async () => {
    if (isLoading) {
      return;
    }

    const lastListItem = document.querySelector("#content > :last-child");
    if (!lastListItem) {
      return;
    }

    const lastItemOffset = lastListItem.offsetTop + lastListItem.offsetHeight;
    const pageOffset = window.scrollY + window.innerHeight;

    if (pageOffset >= lastItemOffset) {
      if (currentPage < lastPage) {
        isLoading = true;
        showLoading();

        currentPage++;
        let newData = await appendCharacters(currentPage);
        appendListItemsHTML(newData);

        // if (getCheckedFilter().length > 0) {
        //   allData = [...allData, ...newData];
        //   applyFilter(getCheckedFilter());
        // }

        hideLoading();
        isLoading = false;
      }
    }
  });

  initFilterAddEventListener();
}

function showLoading() {
  document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

function applyFilter(checkedFilter) {
  let filtered = [...allData];

  if (checkedFilter.includes("btn-filter-alive")) {
    filtered = filtered.filter((data) => data.died === "");
  }
  if (checkedFilter.includes("btn-filter-femeal")) {
    filtered = filtered.filter((data) => data.gender.toLowerCase() === "femeal");
  }
  if (checkedFilter.includes("btn-filter-tvseries")) {
    filtered = filtered.filter((data) => data.tvSeries.length === 0);
  }

  // const content = document.getElementById("content");
  // if (content) {
  //   content.innerHTML = "";
  // }

  if (filtered.length === 0) {
    hideLoading();
  }

  patch("#content", filtered);

  // appendListItemsHTML(filtered);
}
