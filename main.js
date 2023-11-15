import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import Swup from "swup";
import SwupParallelPlugin from "@swup/parallel-plugin";

const swup = new Swup({
  containers: ["#swup"],
  plugins: [new SwupParallelPlugin()],
});

swup.hooks.on("visit:start", (context) => {
  let x = 0.5;
  let y = 0.5;
  const event = context.trigger.event;
  if (event && typeof event.clientX === "number") {
    x = event.clientX / window.innerWidth;
    y = event.clientY / window.innerHeight;
  }
  document.documentElement.style.setProperty("--click-x", x);
  document.documentElement.style.setProperty("--click-y", y);
});
