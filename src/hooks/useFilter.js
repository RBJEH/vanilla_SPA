export function useFilter({ onFilterStateChange }) {
  const filterButtons = [
    document.getElementById("btn-filter-alive"),
    document.getElementById("btn-filter-femeal"),
    document.getElementById("btn-filter-tvseries"),
  ];

  let currentCheckedFilter = [];

  function setFilterCheckboxState(idx) {
    if (filterButtons[idx].classList.contains("checked")) {
      filterButtons[idx].classList.remove("checked");
    } else {
      filterButtons[idx].classList.add("checked");
    }

    currentCheckedFilter = getCheckboxState();
    onFilterStateChange(currentCheckedFilter);
  }

  function getCheckboxState() {
    return filterButtons
      .map((btn, index) => (btn.classList.contains("checked") ? filterButtons[index].id : null))
      .filter(Boolean);
  }

  function getCheckedFilter() {
    const buttons = [
      document.getElementById("btn-filter-alive"),
      document.getElementById("btn-filter-femeal"),
      document.getElementById("btn-filter-tvseries"),
    ];

    return buttons.map((btn, index) => (btn.classList.contains("checked") ? buttons[index].id : null)).filter(Boolean);
  }

  function initFilterAddEventListener() {
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", () => setFilterCheckboxState(i));
    }
  }

  return {
    initFilterAddEventListener,
    getCheckedFilter,
  };
}
