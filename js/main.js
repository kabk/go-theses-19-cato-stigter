// var windowWidth;
// var windowHeight;
// var sections = document.getElementsByTagName("section");
//
// function calculateSizes() {
//   windowWidth = document.documentElement.clientWidth
//
//   windowHeight = document.documentElement.clientHeight
//
//   for (var i = 0; i<sections.length; i++) {
//     sections[i].setAttribute("style", "height: " + windowHeight + "px; width: " + windowWidth + "px")
//   }
// }
//
// // Optimized resize event listener //
// (function() {
//   var throttle = function(type, name, obj) {
//     obj = obj || window;
//     var running = false;
//     var func = function() {
//       if (running) { return; }
//       running = true;
//       requestAnimationFrame(function() {
//         obj.dispatchEvent(new CustomEvent(name));
//         running = false;
//       });
//     };
//     obj.addEventListener(type, func);
//   };
//   throttle("resize", "optimizedResize");
// })();
//
// // Handle event
// window.addEventListener("optimizedResize", function() {
//   calculateSizes()
// });
//
// // Run on start
// calculateSizes()
