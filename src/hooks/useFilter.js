export function useFilter({ onFilterStateChange }) {
  const filterCheckboxs = [
    document.getElementById("toggle-filter-alive"),
    document.getElementById("toggle-filter-femeal"),
    document.getElementById("toggle-filter-tvseries"),
  ];
  const filterButtons = [
    document.getElementById("btn-filter-alive"),
    document.getElementById("btn-filter-femeal"),
    document.getElementById("btn-filter-tvseries"),
  ];

  function setFilterCheckboxState(idx) {
    filterCheckboxs[idx].checked = !filterCheckboxs[idx].checked;
    filterButtons[idx].classList.toggle("checked", filterCheckboxs[idx].checked);
    onFilterStateChange(getCheckboxState());
  }

  function getCheckboxState() {
    return filterCheckboxs.map((cb, index) => (cb.checked ? filterButtons[index].id : null)).filter(Boolean);
  }

  function initFilterAddEventListener() {
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", () => setFilterCheckboxState(i));
    }
  }

  return {
    initFilterAddEventListener,
  };
}
