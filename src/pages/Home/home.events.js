import { useFilter } from "../../hooks/useFilter";
import { usePagination } from "../../hooks/usePagination";

import { renderListItemsHTML } from "../../utils/listRenderer";

export function initHomeEvent() {
  const { initFilterAddEventListener } = useFilter({
    onFilterStateChange: (id) => {
      console.log("checked", id);
    },
  });

  initFilterAddEventListener();

  const pagination = usePagination({
    totalPages: 10,
    onPageChange: async (page) => {
      console.log("page", page);

      const listItemsHTML = await renderListItemsHTML(page);
      document.getElementById("content").innerHTML = listItemsHTML;
      // list item delete button add listener 재바인딩
    },
  });

  pagination.initPaginationAddEventListener();
}
