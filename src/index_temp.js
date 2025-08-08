// variables

const contentDiv = document.getElementById("content");
let currentPage = 1;

// ==================================

function initAddEventListener() {
  // Filter
  for (let i = 0; i < filterCheckboxs.length; i++) {
    setFilterCheckboxState(i);
  }

  // pagination
  for (let i = 1; i <= 10; i++) {
    document.getElementById("page-" + i).addEventListener("click", () => {
      clickPageButton(i);
    });
  }
  document.getElementById("btn-page-prev").addEventListener("click", () => {
    clickPageMoveButton(-1);
  });
  document.getElementById("btn-page-next").addEventListener("click", () => {
    clickPageMoveButton(1);
  });
}

function initListData() {
  updateContent(1);
}

function showFilteredList() {
  // console.log("checked:", filterButtons[i].id); 대신 넣기
}

function clickPageButton(idx) {
  currentPage = idx;
  updateContent(idx);
}

function clickPageMoveButton(idx) {
  if (idx === 1) {
    if (currentPage === 10) {
      currentPage = 10;
      return;
    }

    currentPage = currentPage + 1;
  } else {
    if (currentPage === 1) {
      currentPage = 1;
      return;
    }

    currentPage = currentPage - 1;
  }

  updateContent();
}

function updateContent(idx) {
  contentDiv.innerHTML = "";
  contentDiv.append(`test ${idx}`);
}

initAddEventListener();
initListData();
