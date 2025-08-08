import Title from "../../components/Title/title.js";
import Filter from "../../components/Filter/filter.js";
import List from "../../components/List/list.js";

export default function Home() {
  return `
    ${Title()}
    ${Filter()}
    ${List()}
  `;
}
