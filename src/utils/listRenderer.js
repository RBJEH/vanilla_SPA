import ListItem from "../components/List/ListItem/listitem";
import { getCharacterList } from "../services/characterService";

export async function renderListItemsHTML(page = 1) {
  let characters = await getCharacterList(page);

  return characters
    .slice(0, 10)
    .map((char, idx) => {
      return ListItem(
        idx,
        char.name || "-",
        (char.aliases || []).join(",") || "-",
        (char.titles || []).join(",") || "-",
        char.books.length,
        char.tvSeries.length
      );
    })
    .join("");
}
