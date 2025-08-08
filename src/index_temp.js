const contentDiv = document.getElementById("content");

function initListData() {
  updateContent(1);
}

function clickPageButton(idx) {
  currentPage = idx;
  updateContent(idx);
}

function clickPageMoveButton(idx) {
  updateContent();
}

function updateContent(idx) {
  contentDiv.innerHTML = "";
  contentDiv.append(`test ${idx}`);
}
