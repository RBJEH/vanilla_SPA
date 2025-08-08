export function usePagination({ totalPages = 10, onPageChange }) {
  let currentPage = 1;

  function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) {
      return;
    }

    currentPage = pageNum;
    onPageChange(currentPage);
  }

  function goNext() {
    if (currentPage < totalPages) {
      currentPage++;
      onPageChange(currentPage);
    }
  }

  function goPrev() {
    if (currentPage > 1) {
      currentPage--;
      onPageChange(currentPage);
    }
  }

  function initPaginationAddEventListener() {
    for (let i = 1; i <= 10; i++) {
      const pageBtn = document.getElementById("page-" + i);
      pageBtn.addEventListener("click", () => goToPage(i));
    }

    const prevBtn = document.getElementById("btn-page-prev");
    const nextBtn = document.getElementById("btn-page-next");

    prevBtn.addEventListener("click", () => goPrev());
    nextBtn.addEventListener("click", () => goNext());
  }

  return {
    initPaginationAddEventListener,
    getCurrentPage: () => currentPage,
  };
}
