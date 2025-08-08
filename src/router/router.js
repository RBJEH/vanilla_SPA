import Home from "../pages/Home";

const routes = {
  "/": Home,
};

export async function router() {
  // url 생기면 주석 풀기
  // const path = location.pathname;
  // const page = routes[path] || NotFound;
  // const html = await page();
}
