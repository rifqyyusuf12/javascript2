// //membuat stopwatch

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   this.start = function () {
//     if (running) throw new Error("Stopwatch sudah mulai");
//     running = true;
//     startTime = new Date();
//   };

//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch berhenti");
//     runnning = false;
//     endTime = new Date();
//     const seconds = endTime - startTime / 1000;
//     duration += seconds;
//   };

//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }
// const sw = new Stopwatch();
