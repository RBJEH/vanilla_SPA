// import { router } from "./router/router.js";

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     const link = e.target.closest("a[data-link]");
//     if (link) {
//       e.preventDefault();
//       history.pushState(null, "", link.href);
//       router();
//     }
//   });

//   window.addEventListener("popstate", router);

// router();
// });

import "../public/css/styles.css";

import Home from "./pages/Home/Home";
import { initHomeEvent } from "./pages/Home/home.events";

document.getElementById("app").innerHTML = Home();

initHomeEvent();
