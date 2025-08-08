import { useFilter } from "../../hooks/useFilter";

export function initHomeEvent() {
  const { initFilterAddEventListener } = useFilter({
    onFilterStateChange: (id) => {
      console.log("checked", id);
    },
  });

  initFilterAddEventListener();
}
