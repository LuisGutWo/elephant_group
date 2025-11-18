// Ensure WOW.js is loaded before using WOW
if (typeof window !== "undefined" && typeof WOW !== "undefined")
  new WOW({
    animateClass: "animated",
    offset: 100,
  }).init();
