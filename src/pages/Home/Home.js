import Title from "../../components/Title/title.js";
import Filter from "../../components/Filter/filter.js";
import List from "../../components/List/list.js";

export default async function Home() {
  return `
    <div id="sticky-group">
      ${Title()}
      ${Filter()}
    </div>
    ${await List()}
    `;
}
